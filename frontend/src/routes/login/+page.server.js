import { redirect, fail } from "@sveltejs/kit";

export const load = async ({ locals }) => {
    if(locals.pb.authStore.isValid){
        throw redirect(303, "/")
    }

}
export const actions = {
    register: async ({ locals, request }) => {

        const formData = await request.formData();
        const data = Object.fromEntries([...formData])
        let errors = []

        const fields = [
            { value: data.email, errorType: "email" },
            { value: data.password, errorType: "password" },
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
            const authData = await locals.pb.collection('users').authWithPassword(
                data.email,
                data.password,
            );
        } catch (error) {
            //console.log(error.originalError.data.data);
            console.log(error);
            return fail(422, {
                email: data.email,
                //error: error
            });
        }

        throw redirect(303, '/');
    },
};
