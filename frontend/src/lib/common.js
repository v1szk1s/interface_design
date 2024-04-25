export const base_url = 'http://image.tmdb.org/t/p/original'

export const sameDay = (d1, d2) => {
    return d1.getYear() === d2.getYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate()
}

export const getPosterUrl = (poster_path) => {
    return base_url + poster_path
}

export const ChairState = {
    FREE: 0,
    RESERVED: 1,
    IN_PROGRESS: 2
};
