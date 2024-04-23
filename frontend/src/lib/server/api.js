// @ts-nocheck
import 'dotenv/config'
import { getDay } from '$lib/common';
import { screenings } from '$lib/data.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB}`
  }
};

async function getMovieById(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    return fetch(url, options)
      .then(res => res.json())
      .then(json => json)
      .catch(err => console.error('error:' + err));
}
export { getMovieById };

async function getMovies() {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    return fetch(url, options)
      .then(res => res.json())
      .then(json => json.results)
      .catch(err => console.error('error:' + err));
}
export { getMovies };

function sameDay(d1, d2) {
    return d1.getYear() === d2.getYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate()
}

export async function getScreening(date) {
    return screenings.filter(x => x.times.some(y => sameDay(date, y)))
        .map(x => ( {...x, times: x.times
                .filter( y => sameDay(date, y)) })
        );
}
