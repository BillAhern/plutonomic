import { getUniqueItems } from '../services/data-filters.js';

/**
 * Checks sessionStorage for data and builds an array of unique items
 * @returns array
 */
const getDataFromLocal = () => {
	let parsedDataString: any;
	const checkSessionStorage = window.sessionStorage.getItem('pluto');
	let uniqueItems = [];

	if (checkSessionStorage) {
		parsedDataString = JSON.parse(checkSessionStorage);
		uniqueItems = getUniqueItems(parsedDataString);
	} else {
		console.log('No data in SessionStorage.');
		return 'No data in SessionStorage.';
	}

	console.log('getDataFromLocal called');

	return uniqueItems;
};

export default getDataFromLocal;
