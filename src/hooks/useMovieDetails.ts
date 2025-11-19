import { useQuery } from '@tanstack/react-query';
import { OmdbIdResponse } from '../schemas';
import { isErrorResponse, isTitleResponse } from '../schemas/utils';
import { PUBLIC_API_KEY } from '../enums';

type Props = {
  id: string;
};

export const useMovieDetails = ({ id }: Props) => {
  const result = useQuery({
    // Cache query key by movie id
    queryKey: ['movieDetails', id],
    enabled: !!id,

    queryFn: async () => {
      const params = new URLSearchParams({
        apikey: PUBLIC_API_KEY,
        i: id,
      });

      const URL = `https://www.omdbapi.com/?${params}`;
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const json = await response.json();
      const parsed = OmdbIdResponse.safeParse(json);

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

      if (isTitleResponse(data)) {
        return {
          movie: data,
        };
      }

      return { movie: null };
    },

    staleTime: ONE_MINUTE,
    retry: false,
  });

  return {
    movie: result.data?.movie || null,
    isLoading: result.isLoading,
    isError: result.isError,
  };
};

const ONE_MINUTE = 1000 * 60;
