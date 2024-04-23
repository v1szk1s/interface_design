import {movies} from "$lib/data.js";
import { getMovieById } from '$lib/server/api';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
export async function load({ params }) {
    const movie = await getMovieById(params.slug);
    return {
        movie
    };

}
