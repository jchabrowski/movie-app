import { useQuery } from '@tanstack/react-query';
import { OmdbResponse } from '../schemas';
import {
  isErrorResponse,
  isSearchResponse,
  isTitleResponse,
} from '../schemas/utils';
import { useDebounce } from './useDebounce';

const API_KEY = 'a7e0de6a';

type ValidType = 'movie' | 'series' | 'episode';

type Props = {
  title: string;
  page: number;
  year?: number;
  type?: ValidType;
};

export const useMovies = ({ title, year, type, page }: Props) => {
  // debounce user input for 300ms to not trigger api call after each character change
  const debouncedTitle = useDebounce(title, 300);

  const result = useQuery({
    // Query key should be unique and contain the combination of all parameters to cache it on the frontend
    queryKey: ['movies', debouncedTitle, year, type, page],
    enabled: debouncedTitle.length > 0,

    queryFn: async () => {
      // This is a workaround! OMDBApi is flaky. For a search mode (modifier === 's') with less than 3 characters api results in an error "Too many results."
      // I decided to use the api in title mode (modifier === 't') and fetch only one movie if user searches for a title that has less than 3 characters
      // It produces additional logic and schema validation (responses for 't' and 's' differ).
      // In a real world app this would require a strict business decision (on how we should use the api) or fix in the api itself.
      const MODIFIER = debouncedTitle.length > 2 ? 's' : 't';
      const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&${MODIFIER}=${debouncedTitle}&page=${page}`;

      const response = await fetch(URL);
      const json = await response.json();
      const parsed = OmdbResponse.parse(json);

      if (isErrorResponse(parsed)) {
        console.error(parsed.Error);
        throw new Error(parsed.Error);
      }

      if (isSearchResponse(parsed)) {
        return parsed.Search;
      }

      if (isTitleResponse(parsed)) {
        return [parsed];
      }

      return [];
    },

    staleTime: ONE_MINUTE,
    retry: false,
  });

  return {
    movies: result.data ?? [],
    isLoading: result.isLoading,
    error: result.error ? true : null,
  };
};

const ONE_MINUTE = 1000 * 60;
