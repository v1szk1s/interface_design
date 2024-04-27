import { redirect, fail } from "@sveltejs/kit";
//import pb from "$lib/server/pb";

export const actions = {
    register: async ({ locals, request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);

        let errors = []

        const fields = [
            { value: data.email, errorType: "email" },
            { value: data.password, errorType: "password" },
            { value: data.passwordConfirm, errorType: "passwordConfirm" },
        ];

        for (const field of fields) {
            if (!field.value) {
                errors.push(field.errorType);
            }
        }

        if(data.password1 != data.password2) errors.push("notsame");

        if(errors.length > 0){
            return fail(422, {
                email: data.email,
                errors
            });
        }

        // TODO  
        //try {
        //    const newUser = await locals.pb.collection('users').create(data);
        //    const { token, user } = await locals.pb.collection('users').authWithPassword(data.email, data.password);
        //
        //    locals.pb.authStore.clear();
        //} catch (error) {
        //    console.log(error);
        //    return fail(422, {
        //        email: data.email,
        //        error: error
        //    });
        //}

        throw redirect(303, '/login');
    },
};
