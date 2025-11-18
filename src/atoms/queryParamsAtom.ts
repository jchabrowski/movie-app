// const MOVIES_PER_PAGE = 10;
// const INITIAL_INPUT = '';
const INITIAL_ID = '';

import { atom } from 'jotai';

export const pageAtom = atom(1);
export const movieIdAtom = atom<string>('');

export const titleAtom = atom(INITIAL_ID);
