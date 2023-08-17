import React, { useEffect, useState } from 'react';
import { getUniqueItems } from '../services/data-filters.js';

const filters: React.FC = () => {
	let uniqueTransactions = []; //put this into a state

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
			parsedDataString = 'No data in SessionStorage.';
		}

		return uniqueItems;
	};

	// Experimenting here with a single event handler
	const handleClick = async (event: any) => {
		switch (event.type) {
			case 'click':
				uniqueTransactions = getDataFromLocal();
				console.log('uniqueTransactions\n', uniqueTransactions);
				break;

			default:
				break;
		}
	};

	return (
		<>
			<button type='button' value={'Get Default Sort'} onClick={handleClick}>
				Get default
			</button>
		</>
	);
};

export default filters;
