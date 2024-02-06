import React from 'react';
import { getUniqueItems } from '../services/data-filters.ts';

type DebtorType = {
	'Account Type': string;
	Amount: string;
	Credits: string;
	Date: string;
	Debits: string;
	Description: string;
	'Reference No.': string;
	'Transaction Type': string;
};

const UniqueDebitSums: React.FC = () => {
	const getDataFromStorage = () => {
		let parsedData;
		const sessionStorage = window.sessionStorage.getItem('pluto');

		if (sessionStorage) {
			parsedData = JSON.parse(sessionStorage);
		} else {
			console.log('no data available in sessionStorage');
		}

		return parsedData;
	};

	const calculateUniqueSums = () => {
		const sessionData: DebtorType[] = getDataFromStorage();
		const uniqueDebtorName = getUniqueItems(sessionData);
		let uniqueSums: any[] = [];

		if (sessionData.length > 0) {
			uniqueDebtorName.forEach((debtorName: string) => {
				sessionData.forEach((rawDebtor: DebtorType) => {
					if (debtorName === rawDebtor.Description) {
						if (uniqueSums.find((uniqueItem) => uniqueItem.Description === debtorName)) {
							const uniqueSumsObjIdx = uniqueSums.findIndex((uniqueSumItem) => uniqueSumItem.Description === debtorName);
							const debitsTotal = currencyConcat(rawDebtor.Debits) + currencyConcat(uniqueSums[uniqueSumsObjIdx].Debits);
							uniqueSums.splice(uniqueSumsObjIdx, 1);
							uniqueSums.push({ Description: rawDebtor.Description, Debits: `${'$'}${debitsTotal.toString()}` });
						} else {
							uniqueSums.push({ Description: rawDebtor.Description, Debits: rawDebtor.Debits });
						}
					}
				});
			});
		}

		console.log(`uniqueSums: ${JSON.stringify(uniqueSums)}`);
		return uniqueSums;
	};

	const currencyConcat = (currency: string) => {
		return Number(currency.replace(/[^0-9.-]+/g, ''));
	};

	const handleClick = async () => {
		calculateUniqueSums();
	};

	return (
		<>
			<button type='button' value={'Get Unique Sums'} onClick={handleClick}>
				Unique Sums
			</button>
			<hr />
		</>
	);
};

export default UniqueDebitSums;
