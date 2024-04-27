import { movieStore } from "$lib/stores/stores";
import { redirect } from "@sveltejs/kit";

export async function load() {
    let movies = [];

    movieStore.subscribe(data => {
        movies = data;
    });

    return {
        movies,
    }
}
