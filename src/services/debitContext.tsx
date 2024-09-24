import { ReactNode, createContext, useState } from 'react';
import { DebtorType } from '../types.ts';

type DebitContextType = {
	debitData: DebtorType[];
	setDebitData: React.Dispatch<React.SetStateAction<DebtorType[]>>;
};

export let localData: DebtorType[] = [];

export const DebitContext = createContext<DebitContextType>({
	debitData: localData,
	setDebitData: () => []
});

type DebitProviderProps = {
	children: ReactNode;
};

export const DebitProvider = ({ children }: DebitProviderProps) => {
	const [debitData, setDebitData] = useState<DebtorType[]>([]);

	return <DebitContext.Provider value={{ debitData, setDebitData }}>{children}</DebitContext.Provider>;
};
