import React, { Component } from 'react';
import moviesApiService from '../services/moviesApi.service';
import MovieList from '../components/MovieList';

class MoviesCategory extends Component {
  state = {
    movies: [],
    currentCategory: '',
    loading: false,
    error: false,
  };

  constructor(p) {
    super(p);
    this.componentDidMount = this.getMovies;
    this.componentDidUpdate = this.getMovies;
  }

  async getMovies() {
    const currentCategory = this.props.match.params.categoryName;
    if (currentCategory !== this.state.currentCategory && !this.state.loading) {
      this.setState({ loading: true, error: false });
      try {
        const data = await moviesApiService.getMoviesByCategory(currentCategory);
        //console.log(data);
        this.setState({
          movies: data.results,
          currentCategory,
          loading: false,
          error: false,
        });
      } catch {
        this.setState({
          loading: false,
          currentCategory,
          error: 'Fail fetching movies'
        });
      }
    }
  }

  render() {
    return (
      
      <div>
            <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MoviesCategory;