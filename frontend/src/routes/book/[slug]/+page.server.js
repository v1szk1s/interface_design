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

    const screen = screenings.find(x => x.id == params.slug);
    const movie = movies.find(x => x.id == screen.movieId);

    return {
        screen,
        movie
    }

}

export const actions = {
    reserve: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log('itt')
        console.log(data.get("fullName"));
    },
};
