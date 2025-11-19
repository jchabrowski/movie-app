import type {
  ErrorResponse,
  OmdbGeneralResponseType,
  SearchResponse,
  TitleResponse,
} from '.';

export const isErrorResponse = (
  data: OmdbGeneralResponseType
): data is ErrorResponse => data.Response === 'False';

export const isSearchResponse = (
  data: OmdbGeneralResponseType
): data is SearchResponse =>
  data.Response === 'True' && 'Search' in data && 'totalResults' in data;

export const isTitleResponse = (
  data: OmdbGeneralResponseType
): data is TitleResponse => data.Response === 'True' && !('Search' in data);
