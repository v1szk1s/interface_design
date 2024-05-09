import { movieStore, screeningsStore } from "$lib/stores/stores";
import 'dotenv/config'
import PocketBase from 'pocketbase';
import { fail } from "@sveltejs/kit";
import { getScreenings } from "$lib/server/api";

const pb = new PocketBase('http://127.0.0.1:8090');


export const load = async () => {
    let movies = [];
    let screenings = [];

    movieStore.subscribe(data => {
        movies = data;
    });
    screeningsStore.subscribe(data => {
        screenings = data;
    });

    return {
        movies,
        screenings
    }
}

export const actions = {
    delete: async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData])
        try {
            const authData = await pb.admins.authWithPassword(process.env.EMAIL, process.env.PASSWD);
            await pb.collection('screenings').delete(data.id);
            screeningsStore.set(await getScreenings())
            pb.authStore.clear();
        }catch (error){
            console.log(error.originalError.data)
        }

    },

    add: async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData])
        let errors = [];

        const fields = [
            { value: data.movieId, errorType: "movieId" },
            { value: data.date, errorType: "date" },
        ];

        for (const field of fields) {
            if (!field.value) {
                errors.push(field.errorType);
            }
        }

        if(errors.length > 0){
            return fail(422, {
                email: data.email,
                errors
            });
        }

        try {
            const authData = await pb.admins.authWithPassword(process.env.EMAIL, process.env.PASSWD);
        }catch (error){
            console.log(error.originalError.data)
        }


        try{
            const record = await pb.collection('screenings').create(
                {
                    movieId: data.movieId,
                    date: new Date(`${data.date} ${data.hour.padStart(2, '0')}:${data.minute.padStart(2, '0')}`).toISOString()
                });
            screeningsStore.update((x) => [...x, record])
            pb.authStore.clear();
        }catch (error){
            console.log(error.originalError.data)
        }

    }



}
