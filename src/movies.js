// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map((movie) => movie.director);
    return allDirectors;
}

// Iteration 1.1: Bonus

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const numbMovies = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')}).length;
    
    return numbMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if (moviesArray.length === 0) return 0;

    const avgScore = moviesArray.reduce((acc, val) => {
        if (val.score > 0) {
            return acc + val.score;
        } else {
            return acc;
        }  
    }, 0);

    return Math.round(avgScore/moviesArray.length * 100) / 100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    if (moviesArray.length === 0) return 0;

    const dramaMovies = moviesArray.filter((movies) => movies.genre.includes('Drama'));

    return scoresAverage(dramaMovies);   
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  
    const newArr = moviesArray.map((elem) => elem);
    
    const orderedMovies = newArr.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      }
    });
  
    return orderedMovies;
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const newArr = moviesArray.map((elem) => elem.title);

    const orderMovies = newArr.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        if (a.toLowerCase() === b.toLowerCase()) return 0;
    });
    
    let smallArr = [];
    
    for (let i = 0; i < 20; i++) {
      smallArr.push(orderMovies[i]);
    }

    return smallArr;
}

/* function orderAlphabetically(moviesArray) {

    const newArr = moviesArray.map((elem) => elem);

    let smallArr = [];
    
    for (let i = 0; i < 20; i++) {
      smallArr.push(newArr[i]);
    }
  
    const order20Movies = smallArr.sort((a,b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });
    
    return order20Movies;
    
} */

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
