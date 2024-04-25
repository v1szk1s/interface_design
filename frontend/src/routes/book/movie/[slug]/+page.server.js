import { MovieStore, ScreeningsStore } from "$lib/stores/stores";
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
export function load({ params }) {
    let movies = [];
    let screenings = [];

    MovieStore.subscribe(data => {
        movies = data;
    });

    ScreeningsStore.subscribe(data => {
        screenings = data;
    });

    return {
        movie: movies.find(x => params.slug == x.id),
        screenings: screenings.filter(x => x.movieId == params.slug)
    };

}
