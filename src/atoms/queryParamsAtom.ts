const INITIAL_VALUE = '';

import { atom } from 'jotai';

export const pageAtom = atom(1);
export const movieIdAtom = atom<string>(INITIAL_VALUE);

export const titleAtom = atom(INITIAL_VALUE);
