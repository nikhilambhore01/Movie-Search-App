/** @format */

import React from "react";

import { addMovieToList, handleMovieSearch } from "../actions";

import { connect } from "react-redux";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

 


  handleSearchClick = (e) => {
    const { searchText } = this.state;
    e.preventDefault();
    
    this.props.dispatch(handleMovieSearch(searchText));
   
    // console.log("searchText : ", this.state.searchText);
    this.setState(() => ({
      searchText: "",
    }));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  handleAddMovie = (movie ) => {
      console.log("Adding movie ", movie);
    this.props.dispatch(addMovieToList(movie));
    
  };

  render() {
    const { result: movie, showSearchResults } = this.props.search;
    

    console.log("searchText : ", this.state.searchText);
    return (
      <div className="nav">
        <div className="heading"> Movies.com </div>
        <div className="search-container ">
          
          <form>
            <input
               value={this.state.searchText}
              onChange={this.handleChange}
              type="text"
            />
            <input
              id="search-btn"
              onClick={this.handleSearchClick}
              type="submit"
              value="SEARCH"
            />
          </form>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="poster" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddMovie(movie)}>
                    Add Movie
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};


function mapStateToProps({ search }) {
  return {
    search,
  };
}
export default connect(mapStateToProps)(Navbar);
