import { movieStore, screeningsStore } from "$lib/stores/stores";
import { redirect, fail } from "@sveltejs/kit";
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
export function load({ params }) {
    let movies = [];
    let screenings = [];

    movieStore.subscribe(data => {
        movies = data;
    });

    screeningsStore.subscribe(data => {
        screenings = data;
    });

    const screen = screenings.find(x => x.id == params.slug);
    const movie = movies.find(x => x.id == screen.movieId);

    return {
        screen,
        movie
    }

}

export const actions = {
    reserve: async ({ cookies, request }) => {

        const formData = await request.formData();
        const data = Object.fromEntries([...formData])
        let errors = []

        const fields = [
            { value: data.seats.split(",").filter(x => x.length > 0), errorType: "seats" },
            { value: data.fullName.trim(), errorType: "fullName" },
            { value: data.email.trim(), errorType: "email" },
            { value: data.phone.trim(), errorType: "phone" }
        ];

        for (const field of fields) {
            if (!field.value || (field.value.constructor === Array && field.value.length == 0)) {
                errors.push(field.errorType)
            }
        }

        if(errors.length > 0){
            return fail(422, {
                fullName: data.fullName,
                email: data.email,
                seats: data.seats.split(",").filter(x => x.length > 0),
                errors
            });
        }

        return { success: true };
    },
};
