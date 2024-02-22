import { getUniqueItems } from '../services/data-filters.js';

/**
 * Checks sessionStorage for data and builds an array of unique items
 * @returns array
 */
const getDataFromLocal = () => {
	let parsedDataString: any;
	const checkSessionStorage = window.sessionStorage.getItem('pluto');
	let uniqueItems = [];
	const noDataNotice = {
		'Transaction Type': '',
		Date: '',
		'Account Type': '',
		Description: 'No Data. Choose a file to load.',
		Amount: '',
		'Reference No.': ' ',
		Credits: '',
		Debits: '',
	};

	if (checkSessionStorage) {
		parsedDataString = JSON.parse(checkSessionStorage);
		uniqueItems = getUniqueItems(parsedDataString);
	} else {
		uniqueItems = getUniqueItems([noDataNotice]);
	}

	return uniqueItems;
};

export default getDataFromLocal;
