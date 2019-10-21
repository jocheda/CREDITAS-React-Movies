import React, { Component } from 'react';
import apiService from '../services/moviesApi.service';

class MovieDetail extends Component {
  state = {
    movie: null,
    loading: false,
    error: false,
  };
  constructor(props) {
    super(props);
    this.componentDidMount = this.getMovie;
    this.componentDidUpdate = this.getMovie;
  }

  async getMovie() {
    const currentMovieId = this.props.match.params.id;
    if (currentMovieId !== this.state.currentMovieId && !this.state.loading) {
      this.setState({ loading: true, error: false });
      try {
        const data = await apiService.getMovieById(currentMovieId);
        this.setState({
          movie: data,
          currentMovieId,
          loading: false,
          error: false,
        });
      } catch {
        this.setState({
          loading: false,
          currentMovieId,
          error: 'Fail fetching movie',
        });
      }
    }
  }

  render() {
    const { loading, movie, error } = this.state;

    return (
      <div className='detail'>
        {error && (
          <p>{error}</p>
        )}

        {loading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '2em',
            }}
          >
          </div>
        )}

        {movie && (
          <div>
            <h1>{movie.title}</h1>
            <div className="movie-detail" movie={movie}>
              <div className="photo-detail">
                <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} />
              </div>
              <div className="information-detail">
                <h3>Información Técnica</h3>
                <p>
                  <span>Título original: </span><span>{movie.original_title}</span><br />
                  <span>Original language: </span><span>{movie.original_language}</span><br />
                  <span>Fecha: </span><span>{movie.release_date}</span><br />
                  <span>Adultos: </span>
                  <span>
                    {movie.adult ? "Si" : "No"}
                  </span><br />
                  <span>Genero: </span><span>{movie.genres[0].name}</span><br />
                </p>
                {movie.homepage && <a href={movie.homepage}>{movie.homepage}</a>}
                <h3>Detalles</h3>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        )
        }
      </div>
    );
  }
}

export default MovieDetail;
