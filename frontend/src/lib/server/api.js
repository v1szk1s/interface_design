// @ts-nocheck
import 'dotenv/config'
import PocketBase from 'pocketbase';

     
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
    try {
        const pb = new PocketBase(process.env?.PB_URL || 'http://127.0.0.1:8090');
        const screenings = await pb.collection('screenings').getFullList({ sort: '-created', });
        return screenings.map(x => ({...x, date: new Date(x.date)}));
    } catch (error) {
        console.log("error:" + error);
    }
    return []
}
