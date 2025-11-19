import { atom } from 'jotai';
import type { ValidType } from './queryParamsAtom';

// These atoms are used only locally for filter state.

export const localTypeAtom = atom<ValidType>('all');
// year is used as a string in query params, inside the mui component it can be string/number/undefined
export const localYearAtom = atom<string | number | null>(null);
