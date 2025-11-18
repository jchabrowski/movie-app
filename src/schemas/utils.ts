import type {
  ErrorResponse,
  OmdbResponse,
  SearchResponse,
  TitleResponse,
} from '.';
import { z } from 'zod';

export const isErrorResponse = (
  data: OmdbResponse
): data is z.infer<typeof ErrorResponse> => data.Response === 'False';

export const isSearchResponse = (
  data: OmdbResponse
): data is z.infer<typeof SearchResponse> =>
  data.Response === 'True' && 'Search' in data && 'totalResults' in data;

export const isTitleResponse = (
  data: OmdbResponse
): data is z.infer<typeof TitleResponse> =>
  data.Response === 'True' && !('Search' in data);
