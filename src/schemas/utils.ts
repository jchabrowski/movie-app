import type {
  ErrorResponse,
  OmdbResponseType,
  SearchResponse,
  TitleResponse,
} from '.';
import { z } from 'zod';

export const isErrorResponse = (
  data: OmdbResponseType
): data is z.infer<typeof ErrorResponse> => data.Response === 'False';

export const isSearchResponse = (
  data: OmdbResponseType
): data is z.infer<typeof SearchResponse> =>
  data.Response === 'True' && 'Search' in data;

export const isTitleResponse = (
  data: OmdbResponseType
): data is z.infer<typeof TitleResponse> =>
  data.Response === 'True' && !('Search' in data);
