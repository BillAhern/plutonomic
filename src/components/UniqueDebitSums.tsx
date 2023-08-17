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

[
	{ Description: 'PAYPAL', Debits: '$89.06' },
	{ Description: 'SHUDDER           SHUDDER.COM  NY            ', Debits: '$6.47' },
	{ Description: 'PAYPAL           INST XFER', Debits: '$2026.44' },
	{ Description: 'CHECK', Debits: '$325.00' },
	{ Description: 'TRANQUILLITAS LIVIWWW.TRANQUILLPA            ', Debits: '$495' },
	{ Description: 'Amazon.com*Y141Y8YAmzn.com/billWA            ', Debits: '$35.54' },
	{ Description: 'Amazon.com*RS7JI9UAmzn.com/billWA            ', Debits: '$22.74' },
	{ Description: 'Amazon Tips*QL1YT6Amzn.com/billWA            ', Debits: '$7.00' },
	{ Description: 'GOOGLE *FI 3GFwwz g.co/helppay#CA            ', Debits: '$111.63' },
	{ Description: 'Amazon.com*XQ9K59RAmzn.com/billWA            ', Debits: '$7.50' },
	{ Description: 'Amazon.com*BJ9NM6UAmzn.com/billWA            ', Debits: '$136.69' },
	{ Description: 'Amazon.com*8C6SK1IAmzn.com/billWA            ', Debits: '$19.15' },
	{ Description: 'VENMO            PAYMENT', Debits: '$20.00' },
	{ Description: 'CITY OF OCEAN CITY609-3956900  NJ            ', Debits: '$75.00' },
	{ Description: "SQ *HERMAN'S COFFEPhiladelphia PA            ", Debits: '$72.2' },
	{ Description: 'Amazon.com*8D2J41RAmzn.com/billWA            ', Debits: '$13.49' },
	{ Description: 'Amazon.com*SC1SV5JAmzn.com/billWA            ', Debits: '$32.91' },
	{ Description: 'FYF*FROMYOUFLOWERS800-838-8853 CT            ', Debits: '$59.33' },
	{ Description: 'ALLSTATE V&P INS INS PREM', Debits: '$130.15' },
	{ Description: 'DD DOORDASH SPROUT855-973-1040 CA            ', Debits: '$282.06' },
	{ Description: 'CLEMENTON PARK    574-5834141  NJ            ', Debits: '$85.28' },
	{ Description: 'BERKADIA COMMERC DIRECT D', Debits: '$0' },
	{ Description: 'PROG ADVANCED    INS PREM', Debits: '$131.09' },
	{ Description: 'Kindle Unltd*ZN26A888-802-3080 WA            ', Debits: '$12.71' },
	{ Description: 'SQ *ROBERT ZARKO  Media        PA            ', Debits: '$9.44' },
	{ Description: 'LONGWOOD GARDENS I610-3885460  PA            ', Debits: '$50.00' },
	{ Description: 'HELP.MAX.COM      MAX.COM      NY            ', Debits: '$17.27' },
	{ Description: 'DD DOORDASH THEQUA855-973-1040 CA            ', Debits: '$47.81' },
	{ Description: 'FROM SAVINGS     6269903897', Debits: '$0' },
	{ Description: 'AMZN Mktp US*BA1WOAmzn.com/billWA            ', Debits: '$74.19' },
	{ Description: 'Disney Plus       888-9057888  CA            ', Debits: '$11.87' },
	{ Description: 'GOOGLE *Domains   g.co/helppay#CA            ', Debits: '$12.00' },
	{ Description: 'DFSDIRECTPAYMENT DFSPAYMENT', Debits: '$600.85' },
	{ Description: 'CONSTELLATION@PHILPHILADELPHIA PA            ', Debits: '$59.669999999999995' },
	{ Description: 'PAYMENT FOR AMZ  STORECARD', Debits: '$303.55' },
	{ Description: 'Amazon Tips*ZO5OI4Amzn.com/billWA            ', Debits: '$10.00' },
	{ Description: 'FROM SAVINGS     6269922670', Debits: '' },
	{ Description: 'PECO ENERGY COMP BILLPAY', Debits: '$137.68' },
	{ Description: 'CITYOFPHILA      WATER', Debits: '$168.15' },
	{ Description: 'Mission Lane Vis Mission La', Debits: '$500.00' },
	{ Description: 'Amazon.com*FD7PG3AAmzn.com/billWA            ', Debits: '$322.00' },
	{ Description: 'PGW EZ PAY        PHILADELPHIA PA            ', Debits: '$158.29' },
	{ Description: 'TO SAVINGS       6269922670', Debits: '$200.00' },
	{ Description: 'TO SAVINGS       6269903897', Debits: '$1800' },
	{ Description: 'HANNA ANDERSSON HQ503-2420920  OR            ', Debits: '$141.84' },
	{ Description: 'Audible*WP9XA5HJ3 Amzn.com/billNJ            ', Debits: '$15.85' },
	{ Description: 'SQ *PATISSERIE LENGreat BarringMA            ', Debits: '$24.64' },
	{ Description: 'BERKSHIRE FOOD    GT.BARRINGTONMA            ', Debits: '$116.00' },
	{ Description: 'LS LITTLE PICKLES 845-8358086  NY            ', Debits: '$49.65' },
	{ Description: 'PAYPAL           TRANSFER', Debits: '' },
	{},
];