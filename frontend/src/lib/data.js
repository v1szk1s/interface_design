function getDate(day, hour, minute){
    let d = new Date();
    d.setDate(d.getDate() + day);
    d.setHours(hour);
    d.setMinutes((typeof minute == "undefined") ? 0 : minute);
    d.setSeconds(0);
    d.setMilliseconds(0);
    return d;
}

export const screenings = [
            {id: 1, movieId: 823464, date: getDate(0, 18, 30)},
            {id: 2, movieId: 823464, date: getDate(0, 21, 30)},
            {id: 3, movieId: 693134, date: getDate(0, 21)},
            {id: 4, movieId: 693134, date: getDate(1, 15)},
            {id: 5, movieId: 693134, date: getDate(1, 18)},
            {id: 6, movieId: 1011985, date: getDate(1, 21)},
            {id: 7, movieId: 1011985, date: getDate(2, 15)},
            {id: 8, movieId: 720321, date: getDate(3, 18)},
            {id: 9, movieId: 940551, date: getDate(3, 21)},
            {id: 10, movieId: 1239146, date: getDate(4, 18)},
            {id: 11, movieId: 929590, date: getDate(5, 18)},
            {id: 12, movieId: 634492, date: getDate(6, 18)},
            {id: 13, movieId: 984324, date: getDate(7, 18)},
        ]
