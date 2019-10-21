import axios from 'axios';
import {API_KEY}from '../constants/apiThemoviedb';

class ApiService {
  constructor() {
    this.callsDone = 0;
  }

  async getMoviesByCategory(category, page = 1) {
    this.callsDone++;

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=es-ES&page=${page}`,
    );
    return data;
  }

  async getMovieById(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`,
    );
    return data;
  }

  howManyCalls() {
    return this.callsDone;
  }
}

export default new ApiService();
