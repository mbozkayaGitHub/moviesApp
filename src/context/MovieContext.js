import { async } from '@firebase/util';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const MovieContext = createContext();

const API_KEY = 'a661ed05e48d9c25013f54f6a6cd626f';
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=`;

const MovieContextProvider = (prop) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    getMovie(FEATURED_API);
  }, []);
  const getMovie = async (api) => {
    try {
      const {
        data: { results },
      } = await axios.get(api);

      setMovie(results);
    } catch (error) {}
  };
  return (
    <MovieContext.Provider value={{ movie }}>
      {prop.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
