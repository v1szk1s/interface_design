// src/hooks.server.js
import PocketBase from 'pocketbase';
import 'dotenv/config'

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
    try {
        
        event.locals.pb = new PocketBase(process.env?.PB_URL || 'http://127.0.0.1:8090');

        // load the store data from the request cookie string
        event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
        if(event.locals.pb.authStore.isValid) {
            event.locals.user = event.locals.pb.authStore.model
        }

        const response = await resolve(event);

        // send back the default 'pb_auth' cookie to the client with the latest store state
        response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

        return response;
    } catch (error) {
        console.log("error")
        
    }
}
