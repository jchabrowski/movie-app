const INITIAL_VALUE = '';

// 'all' is a default value to avoid user confusion. It will not be passed as query params
export type ValidType = 'movie' | 'series' | 'episode' | 'all';

import { atom } from 'jotai';

export const pageAtom = atom(1);
export const yearAtom = atom<string | undefined>();
export const typeAtom = atom<ValidType>('all');
export const titleAtom = atom(INITIAL_VALUE);

export const filtersAtom = atom((get) => {
  const type = get(typeAtom);
  const year = get(yearAtom);

  return {
    type,
    year,
  };
});

export const movieIdAtom = atom<string>(INITIAL_VALUE);
