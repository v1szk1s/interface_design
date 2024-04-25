//import {movies} from "$lib/data.js";
import { getMovies } from "$lib/server/api";
import { MovieStore } from "$lib/stores/stores";

export async function load() {
    let movies = [];

    MovieStore.subscribe(data => {
        movies = data;
    });

    return {
        movies: movies
    }
}
