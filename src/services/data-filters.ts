import { DebtorType } from '../types.ts';

/**
 * Takes an array of DebtorType objects and returns only unique objects
 * based based on the object description property
 *
 * @param {DebtorType[]} data - The array of DebtorType objects.
 * @returns {any[]} An array of unique descriptions from the input array.
 */
export const getUniqueItems = (data: DebtorType[]): any => {
	const cleanDebitArray = removeNonDebit(data);
	const cleanArray: DebtorType[] = reduceAmazon(cleanDebitArray);
	const emptyDescArray: DebtorType[] = setDescriptionByType(cleanArray);

	let uniqueArr = Array.from(new Set(emptyDescArray.map((item) => item.Description)));

	return uniqueArr;
};

/**
 * Filters an array of debtors, reducing multiple Amazon entries to a single entry.
 * @param {DebtorType[]} filteredData - An array of debtor objects to be filtered.
 * @returns {DebtorType[]} cleanAmazonArray - An array of debtor objects, with multiple Amazon entries reduced to a single entry.
 */
export const reduceAmazon = (filteredData: DebtorType[]) => {
	const cleanAmazonArray: DebtorType[] = [];
	let amazonCount = 0;

	filteredData.forEach((item: DebtorType) => {
		const isAmazon = getItemByRegex(item.Description, /amazon/i);

		if (isAmazon && amazonCount === 0) {
			cleanAmazonArray.push(item);
			amazonCount++;
		} else {
			cleanAmazonArray.push(item);
		}
	});

	return cleanAmazonArray;
};

export const reconcilePaypal = () => {};

/**
 * Filters out non-debit transactions from the provided data.
 *
 * @param {DebtorType[]} data - The array of transaction data to be filtered.
 * @returns {DebtorType[]} debitArray - The array of debit transactions.
 *
 * @example
 * const data = [
 *  { 'Transaction Type': 'DIRECT DEPOSIT', ... },
 *  { 'Transaction Type': 'TRANSFER', ... },
 *  { 'Transaction Type': 'DEBIT', ... }
 * ];
 * const debits = removeNonDebit(data);
 */
export const removeNonDebit = (data: DebtorType[]) => {
	const debitArray: DebtorType[] = [];

	data.forEach((debit) => {
		if (debit['Transaction Type'] !== 'DIRECT DEPOSIT' && debit['Transaction Type'] !== 'TRANSFER') {
			debitArray.push(debit);
		}
	});

	return debitArray;
};

/**
 * Checks if a given regular expression matches any part of a description.
 *
 * @param {string} description - The description to be searched.
 * @param {RegExp} descValue - The regular expression to be used for searching.
 * @returns {boolean} Returns true if the regular expression matches any part of the description, false otherwise.
 */
const getItemByRegex = (description: string, descValue: RegExp): boolean => {
	if (description === undefined) {
		return false;
	} else if (description.search(descValue) !== -1) {
		return true;
	} else {
		return false;
	}
};

/**
 * Updates the description of each item in the dataArray based on its 'Transaction Type'.
 * If an item does not have a 'Transaction Type', it is ignored.
 * If an item does not have a description, its 'Transaction Type' is used as the description.
 *
 * @param {DebtorType[]} dataArray - The array of debtor types to be updated.
 * @returns {DebtorType[]} The updated array of debtor types.
 */
const setDescriptionByType = (dataArray: DebtorType[]) => {
	let updatedArray: DebtorType[] = [];

	dataArray.forEach((item: any) => {
		if (!item['Transaction Type']) {
			return;
		} else if (!item.Description) {
			item.Description = item['Transaction Type'];
			updatedArray.push(item);
		} else {
			updatedArray.push(item);
		}
	});

	return updatedArray;
};
