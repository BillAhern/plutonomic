import { DebtorType } from '../types.ts';

/**
 * This function takes an array of DebtorType objects and returns only unique objects
 * based based on the object description property
 *
 * @param {DebtorType[]} data - The array of DebtorType objects.
 * @returns {any[]} An array of unique descriptions from the input array.
 */
export const getUniqueItems = (data: DebtorType[]): any => {
	const _data = data;
	const uniqueArr = Array.from(new Set(_data.map((item) => item.Description)));

	return uniqueArr;
};

export const filterAmazon = () => { }

export const reconcilePaypal = () => { }