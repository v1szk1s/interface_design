import { getMovies, getScreenings } from "$lib/server/api";
import { writable } from "svelte/store";

const MovieStore = writable(
    await getMovies()
); 

const ScreeningsStore = writable(
    await getScreenings()
);

export { MovieStore, ScreeningsStore };
