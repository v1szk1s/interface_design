export const base_url = 'http://image.tmdb.org/t/p/original'

export const getPosterUrl = (poster_path) => {
    return base_url + poster_path
}

export const getDay = (day) => {
    if(typeof day.getDay === 'function'){
        day = day.getDay()
    }

    return ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][day <= 0 ? day+6:day-1]
}
