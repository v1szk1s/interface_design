// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { movieStore, screeningsStore } from '$lib/stores/stores';

import { sameDay } from '$lib/common';

export async function load({ params }) {
    let movies = [];
    let screenings = []; 
    //let filtered = [];

    movieStore.subscribe(data => {
        movies = new Map(data.map(x => { return [x.id, x] }));
    });

    screeningsStore.subscribe(data => {
        screenings = data;
    });

    //movies = movies.map(x => ({...x, screenings: screenings.filter(y => y.movieId === x.id)}))

    //let d = new Date();
    //for (let i = 0;  i < 7;  i++) {
        //d.setDate(d.getDate() + i)
        //filtered.push(screenings.filter(x => sameDay(x.date, d)));
    //}
    //movies = 

    return {
        movies,
        screenings
    };
}
