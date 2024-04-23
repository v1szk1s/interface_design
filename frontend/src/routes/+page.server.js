//import {movies} from "$lib/data.js";
import { getMovies } from "$lib/server/api";

export async function load() {
    const movies = await getMovies();
    return {
        movies: movies
    }
}
