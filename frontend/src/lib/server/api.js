// @ts-nocheck
import 'dotenv/config'
import { getDay, sameDay } from '$lib/common';
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


export async function getScreenings() {
    return screenings;
}
