import { getMovies, getScreenings } from "$lib/server/api";
import { writable } from "svelte/store";

const movieStore = writable(
    await getMovies()
); 

const screeningsStore = writable(
    await getScreenings()
);

export { movieStore, screeningsStore };
