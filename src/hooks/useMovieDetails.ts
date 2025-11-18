import { useQuery } from '@tanstack/react-query';
import { OmdbResponse } from '../schemas';
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
      const URL = `https://www.omdbapi.com/?apikey=${PUBLIC_API_KEY}&i=${id}`;

      const response = await fetch(URL);
      const json = await response.json();
      const parsed = OmdbResponse.parse(json);

      if (isErrorResponse(parsed)) {
        // console.error for local development
        console.error(parsed.Error);
        throw new Error(parsed.Error);
      }

      if (isTitleResponse(parsed)) {
        return {
          movie: parsed,
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
    error: result.error ? true : null,
  };
};

const ONE_MINUTE = 1000 * 60;
