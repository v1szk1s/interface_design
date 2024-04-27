// @ts-nocheck
import 'dotenv/config'
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
     
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
    const screenings = await pb.collection('screenings').getFullList({ sort: '-created', });
    return screenings.map(x => ({...x, date: new Date(x.date)}));
}
