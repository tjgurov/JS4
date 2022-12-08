"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    },
    showMyDB: function () {
      if (!personalMovieDB.privat ) {
        console.log(this);
      }
},
    writeYourGenres: function () {
  responses = 0;
  while (responses <= 2) {
    const genre = prompt(`Ваш любимый жанр под номером ${responses + 1}`);
    if (genre == "" || genre == null ) {
      continue;
    }
    responses++;
    this.genres.push(genre);
  }
}
};


let responses = 0;

while (responses < 2) {
  const movie = prompt('Один из последних просмотренных фильмов?', '');
  const rate = prompt('На сколько оцените его?', '');
  if ( movie.length == 0 || movie.length > 50 || movie == null || rate == null || rate.length == 0){
  continue;
}
responses++;
personalMovieDB.movies[movie] = rate;
}

personalMovieDB.writeYourGenres();

if (numberOfFilms < 10) {
  alert('Просмотрено довольно мало фильмов');
}
  if (numberOfFilms < 31) {
  alert('Вы классический зритель');
}
  if (numberOfFilms > 30) {
  alert('Вы киноман');
}
  else {
  alert('Произошла ошибка');
}


personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();

personalMovieDB.genres.forEach((item, i) => {
  console.log (`Любимый жанр #${i + 1} - это ${item}`);
});


