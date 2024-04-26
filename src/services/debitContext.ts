import { createContext } from 'react';
import { DebtorType } from '../types.ts';
import getDataFromLocal from './session-data.ts';

let localData = [{} as DebtorType];

export const DebitContext = createContext(localData);
