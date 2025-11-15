import { useCallback, useEffect, useState } from 'react';
import type { MovieProps } from '../components/MovieTile';

const API_KEY = 'a7e0de6a';
const DEBOUNCE_DELAY_MS = 300;

type ValidType = 'movie' | 'series' | 'episode';

type Props = {
  title: string;
  page: number;
  year?: number;
  type?: ValidType;
};

export const useGetDebouncedMovies = ({ title, year, type, page }: Props) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [error, setError] = useState<null | string>(null);
  const modifier = title.length > 2 ? 's' : 't';

  const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${API_KEY}&${modifier}=${title}&page=${page}`;

  const getMovies = useCallback(async () => {
    const response = await fetch(API_ENDPOINT);
    const result = await response.json();

    return result;
  }, [API_ENDPOINT]);

  useEffect(() => {
    if (title.length === 0) {
      //   setMovies([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      getMovies().then((data) => {
        console.log({ data });
        // data.Search for 's' modifier, data for 't' modifier - todo - make it clear

        if (data.Error) {
          setError(data.Error);
          return;
        } else {
          setMovies(data.Search || [data]);
          setError(null);
        }
      });
    }, DEBOUNCE_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, [title, getMovies]);

  return { movies, error };
};
