//import {movies} from "$lib/data.js";
import { getMovies } from "$lib/server/api";

export async function load() {
    const movies = await getMovies();
    console.log(movies);
    return {
        movies: movies
    }
}
