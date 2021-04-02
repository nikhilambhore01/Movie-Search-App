/** @format */

import React from "react";
import { addFavourite, removeFromFavourite, removeMovie } from "../actions";
import { connect } from "react-redux";
import fav from "../assets/fav-icon.png";
import unfav from "../assets/unfav-icon.png";

class MovieCard extends React.Component {
  handelFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };

  handelUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourite(movie));
  };

  handelRemoveMovie = () => {
    const { movie } = this.props;
    this.props.dispatch(removeMovie(movie));
  };
  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="title">
          <div className="title-head"> {movie.Title} </div>
          <button className="remove-btn" onClick={this.handelRemoveMovie}>
            X
          </button>
        </div>
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>

        <div className="right">
          {/* <button className="remove-btn" onClick={this.handelRemoveMovie}>
            X
          </button>
          <div className="title"> {movie.Title} </div> */}
          {/* <div className="plot"> {movie.Plot} </div> */}

          <div className="footer">
            <div className="rating">IMDB Rating:{movie.imdbRating} </div>

            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handelUnFavouriteClick}>
                <img src={unfav} alt="fav-icon.js" height="25px" />
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handelFavouriteClick}>
                <img src={fav} alt="fav-icon.js" height="25px" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ props }) {
  return { props };
}
export default connect(mapStateToProps)(MovieCard);
