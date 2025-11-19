import { atomWithStorage } from 'jotai/utils';
import type { MovieDetailsResponse } from '../schemas';

export type FavouriteMovieDetails = Pick<
  MovieDetailsResponse,
  'Plot' | 'Poster' | 'Title' | 'imdbRating' | 'imdbID'
>;

export const favouritesAtom = atomWithStorage<FavouriteMovieDetails[]>(
  'favourites',
  []
);
