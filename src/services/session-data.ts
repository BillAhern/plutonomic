import { DebtorType } from '../types.ts';

/**
 * Checks sessionStorage for data and returns it
 * @returns array
 */
const getDataFromLocal = () => {
	let parsedDataString: DebtorType[];
	const checkSessionStorage = window.sessionStorage.getItem('pluto');
	const noDataNotice = {
		'Transaction Type': '',
		Date: '',
		'Account Type': '',
		Description: 'No Data. Choose a file to analyze.',
		Amount: '',
		'Reference No.': ' ',
		Credits: '',
		Debits: '',
	};

	if (checkSessionStorage) {
		parsedDataString = JSON.parse(checkSessionStorage);
	} else {
		parsedDataString = [noDataNotice];
	}

	return parsedDataString;
};

export default getDataFromLocal;
