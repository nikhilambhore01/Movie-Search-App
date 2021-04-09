/** @format */
import React from "react";
import { data as moviesList } from "./data";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { addMovies, setShowFavourite } from "./actions";
import { connect } from "react-redux";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(moviesList));

    // console.log("STATE", this.props);
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      // found movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourite(val));
  };

  render() {
    const { movies, search } = this.props; // {movies:[], search: []}
    const { list, favourites, showFavourites } = movies;
    console.log("RENDER", this.props);

    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar search={search} />

        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}>
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}>
              Favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                // dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies To Display! </div>
          ) : null}
        </div>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
