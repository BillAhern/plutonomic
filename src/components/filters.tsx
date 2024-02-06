import React, { useEffect, useState, useRef } from 'react';
import { getUniqueItems } from '../services/data-filters.js';

const filters: React.FC = () => {
	// let uniqueTransactions = []; //put this into a state
	const [uniqueTransactions, setUniqueTransactions] = useState([]);
	const ref = useRef(null);
	const element = ref.current;

	useEffect(() => {
		setUniqueTransactions(getDataFromLocal());
	}, []);

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
			return 'No data in SessionStorage.';
		}

		console.log('getDataFromLocal called');

		return uniqueItems;
	};

	// Experimenting here with a switch event handler
	const handleClick = (event: any) => {
		switch (event.type) {
			case 'click':
				// uniqueTransactions = getDataFromLocal();
				setUniqueTransactions(getDataFromLocal());
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
			<hr />
		</>
	);
};

export default filters;
