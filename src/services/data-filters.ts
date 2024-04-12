import { DebtorType } from '../types.ts';

/**
 * This function takes an array of DebtorType objects and returns only unique objects
 * based based on the object description property
 *
 * @param {DebtorType[]} data - The array of DebtorType objects.
 * @returns {any[]} An array of unique descriptions from the input array.
 */
export const getUniqueItems = (data: DebtorType[]): any => {
	const cleanDebitArray = removeNonDebit(data);
	const cleanArray: DebtorType[] = reduceAmazon(cleanDebitArray);

	const uniqueArr = Array.from(new Set(cleanArray.map((item) => item.Description)));

	// Put something in here to omit check payments

	return uniqueArr;
};

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

export const removeNonDebit = (data: any[]) => {
	const debitArray: DebtorType[] = [];

	data.forEach((debit) => {
		if (debit['Transaction Type'] !== 'DIRECT DEPOSIT' && debit['Transaction Type'] !== 'TRANSFER') {
			debitArray.push(debit);
		}
	});

	return debitArray;
};

const getItemByRegex = (description: string, descValue: RegExp): boolean => {
	if (description === undefined) {
		return false;
	} else if (description.search(descValue) !== -1) {
		return true;
	} else {
		return false;
	}
};
