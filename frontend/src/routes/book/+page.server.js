// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MovieStore, ScreeningsStore } from '$lib/stores/stores';

function sameDay(d1, d2) {
    return d1.getYear() === d2.getYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate()
}

export async function load({ params }) {
    let movies = [];
    let screenings = []; 
    let filtered = [];

    MovieStore.subscribe(data => {
        movies = data;
    });
    ScreeningsStore.subscribe(data => {
        screenings = data;
    });


    movies = movies.map(x => ({...x, screenings: screenings.filter(y => y.movieId === x.id)}))

    let d = new Date();
    for (let i = 0;  i < 7;  i++) {
        d.setDate(d.getDate() + i)
        filtered.push(screenings.filter(x => sameDay(x.date, d)));
    }
    movies = new Map(movies.map(x => { return [x.id, x] }))

    return {
        movies,
        screenings: filtered
    };
}
