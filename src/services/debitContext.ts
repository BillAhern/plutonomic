import { createContext } from 'react';
import { DebtorType } from '../types.ts';

const localData = [{} as DebtorType];

export const DebitContext = createContext(localData);
