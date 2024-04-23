/* eslint-disable @typescript-eslint/ban-ts-comment */

import { getMovies, getScreening } from "$lib/server/api";

export async function load() {
    const screenings = []
    const movies = await getMovies();


    const date = new Date();
    for (let i = 0; i < 7; i++) {
        screenings.push(await getScreening(date));
        date.setDate(date.getDate() + 1)
    }

    return {
        screenings,
        movies: new Map(movies.map(x => {
            return [x.id, x]
        }))
    };
}
