/** @format */

import React from "react";

import { addMovieToList, handleMovieSearch } from "../actions";

import { connect } from "react-redux";
// import { data } from "../data";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleSearchClick = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
    console.log("searchText : ", searchText);
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  handleAddMovie = (movie, searchText) => {
    console.log("Adding movie ", movie);
    this.props.dispatch(addMovieToList(movie));
    // this.setState({
    //   showSearchResults: false
    // });
    this.setState({ searchText: " " });
    console.log("searchText : ", searchText);
  };

  render() {
    const { result: movie, showSearchResults } = this.props.search;
    // console.log("Result : ", result);

    return (
      <div className="nav">
        <div className="heading"> Movies.com </div>
        <div className="search-container ">
          <input type="text" onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>

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
}

// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps({ search }) {
  return {
    search,
  };
}
export default connect(mapStateToProps)(Navbar);
