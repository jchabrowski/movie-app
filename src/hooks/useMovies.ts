import { useQuery } from '@tanstack/react-query';
import { OmdbGeneralResponse } from '../schemas';
import {
  isErrorResponse,
  isSearchResponse,
  isTitleResponse,
} from '../schemas/utils';
import { useDebounce } from './useDebounce';
import { MOVIES_PER_PAGE, PUBLIC_API_KEY } from '../enums';
import { useAtom, useAtomValue } from 'jotai';
import { filtersAtom, pageAtom, titleAtom } from '../atoms/queryParamsAtom';

export const useMovies = () => {
  const page = useAtomValue(pageAtom);
  const title = useAtomValue(titleAtom);
  const [{ type, year }] = useAtom(filtersAtom);

  // debounce user input for 300ms to not trigger api call after each character change
  const debouncedTitle = useDebounce(title, 300);

  // This is a workaround! OMDBApi is flaky. For a search mode request (modifier === 's') with title shorter than 3 characters api results in an error "Too many results."
  // I decided to use the api in title mode (modifier === 't') and fetch only one movie if user searches for a title that has less than 3 characters
  // It produces additional logic and schema validation (responses for 't' and 's' differ).
  // In a real world scenario this would require a strict business decision (on how the api should be used) or fix in the api itself.
  const MODIFIER = debouncedTitle.length > 2 ? 's' : 't';

  const params = new URLSearchParams({
    apikey: PUBLIC_API_KEY,
    [MODIFIER]: debouncedTitle,
    page: page.toString(),
    // add type if it was changed by the user
    ...(type !== 'all' && { type }),
    // add year to query params if entered by the user
    ...(year && { y: year }),
  });

  const result = useQuery({
    // Query key should be unique and contain the combination of all parameters to cache it on the frontend
    queryKey: ['movies', debouncedTitle, year, type, page],
    enabled: debouncedTitle.length > 0,

    queryFn: async () => {
      const URL = `https://www.omdbapi.com/?${params}`;
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const json = await response.json();
      const parsed = OmdbGeneralResponse.safeParse(json);

      if (!parsed.success) {
        console.error('Validation failed:', parsed.error.issues);
        throw new Error('Invalid API response');
      }

      const { data } = parsed;

      if (isErrorResponse(data)) {
        // console.error for local development
        console.error(data.Error);
        throw new Error(data.Error);
      }

      if (isSearchResponse(data)) {
        return {
          movies: data.Search,
          pagesAmount: Math.ceil(Number(data.totalResults) / MOVIES_PER_PAGE),
        };
      }

      if (isTitleResponse(data)) {
        return {
          movies: [data],
          pagesAmount: 1,
        };
      }

      return { movies: [], totalResults: 0 };
    },

    staleTime: ONE_MINUTE,
    retry: false,
  });

  return {
    movies: result.data?.movies ?? [],
    isLoading: result.isLoading,
    isError: result.isError,
    pagesAmount: result.data?.pagesAmount ?? 1,
  };
};

const ONE_MINUTE = 1000 * 60;
