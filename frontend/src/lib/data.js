function getDates(start, length, times){
    let dates = []
    for(let i = 0; i < length; i++){
        let isAtHalf = Math.random() < 0.5 ? 0:30;
        for (let j = 0; j < times; j++) {
            let d = new Date();
            d.setDate(d.getDate() + start + i);

            d.setMinutes(isAtHalf);
            d.setSeconds(isAtHalf);
            d.setHours(18 + j*3);
            d.setMilliseconds(0);
            dates.push(d);
        }
    }

    return dates;

}

export const screenings = [
            {id: 1, movieId: 823464, times: getDates(0, 4, 2)},
            {id: 2, movieId: 693134, times: getDates(1, 4, 2)},
            {id: 3, movieId: 1011985, times: getDates(2, 4, 2)},
            {id: 4, movieId: 720321, times: getDates(3, 4, 2)},
            {id: 5, movieId: 940551, times: getDates(4, 4, 2)},
            {id: 6, movieId: 1239146, times: getDates(6, 4, 2)},
            {id: 7, movieId: 929590, times: getDates(7, 4, 2)},
            {id: 8, movieId: 634492, times: getDates(8, 4, 2)},
            {id: 9, movieId: 984324, times: getDates(8, 4, 2)},
            {id: 10, movieId: 1105407, times: getDates(9, 4, 2)},
            //{id: 11, movieId: 1127166, times: getDates(8, 4, 2)},
            //{id: 12, movieId: 934632, times: getDates(0, 4, 2)},
            //{id: 13, movieId: 438631, times: getDates(0, 4, 2)},
            //{id: 14, movieId: 1111873, times: getDates(0, 4, 2)},
            //{id: 15, movieId: 1181548, times: getDates(0, 4, 2)},
            //{id: 16, movieId: 967847, times: getDates(0, 4, 2)},
            //{id: 17, movieId: 1041613, times: getDates(0, 4, 2)},
            //{id: 18, movieId: 437342, times: getDates(0, 4, 2)},
            //{id: 19, movieId: 845783, times: getDates(0, 4, 2)},
        ]
