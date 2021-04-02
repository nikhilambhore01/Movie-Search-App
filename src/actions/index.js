/** @format */

export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const REMOVE_MOVIES = "REMOVE_MOVIES";

// action creater
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function removeMovie(movie) {
  return {
    type: REMOVE_MOVIES,
    movie,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}

export function removeFromFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    movie,
  };
}

export function setShowFavourite(val) {
  return {
    type: SET_SHOW_FAVOURITE,
    val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

// export function handleMovieSearch(movie) {
//   const url = `http://www.omdbapi.com/?apikey=fe614767&t=${movie}`;
//   return function (dispatch) {
//     fetch(url)
//       .then((response) => response.json())
//       .then((movie) => {
//         console.log("Movie : ", movie);
//         // dispatching an action
//         // dispatch( addMovieSearchResult(movie) )
//       });
//   };
// }

export function handleMovieSearch(searchText) {
  return function (dispatch) {
    const url = `https://www.omdbapi.com/?apikey=fe614767&t=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("MOVIE", movie);
        // dispatch action to save search results in store
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
