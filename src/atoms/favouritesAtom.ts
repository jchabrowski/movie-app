import { atomWithStorage } from 'jotai/utils';

export type MovieDetails = {
  Plot: string;
  Poster: string;
  Title: string;
  imdbRating: string;
  id: string;
};

export const favouritesAtom = atomWithStorage<MovieDetails[]>('favourites', []);
