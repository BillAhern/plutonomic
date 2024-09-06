import { createContext } from 'react';
import { DebtorType } from '../types.ts';

type DebitContextType = {
	debitData: DebtorType[];
	setDebitData: React.Dispatch<React.SetStateAction<DebtorType[]>>;
};

let localData: DebtorType[] = [
	{
		'Account Type': '',
		Amount: '',
		Credits: '',
		Date: '',
		Debits: '',
		Description: '',
		'Reference No.': '',
		'Transaction Type': '',
	},
];

export const DebitContext = createContext<DebitContextType>({
	debitData: localData,
	setDebitData: () => [],
});
