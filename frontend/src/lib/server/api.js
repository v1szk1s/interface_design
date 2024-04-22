import 'dotenv/config'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB}`
  }
};

export async function getMovieById(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    console.log(url);
    return fetch(url, options)
      .then(res => res.json())
      .then(json => json)
      .catch(err => console.error('error:' + err));
}

export async function getMovies() {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    return fetch(url, options)
      .then(res => res.json())
      .then(json => json.results)
      .catch(err => console.error('error:' + err));
}
