import React, { useEffect, useState } from 'react';
import getDataFromLocal from '../services/session-data.js';
import { getUniqueItems } from '../services/data-filters.ts';
import { DebtorType } from '../types.ts';

const FilterUnique: React.FC = () => {
	const [uniqueDebit, setUniqueDebit] = useState([]);
	let sessionData;

	useEffect(() => {
		setDefault();
	}, []);

	// Once data is loaded into storage, filter it
	addEventListener('file-loaded', () => {
		sessionData = getDataFromLocal();
		const filteredData = getUniqueItems(sessionData);
		setUniqueDebit(filteredData);
	});

	// Experimenting here with a switch event handler
	// const handleEvent = (event: any) => {
	// 	switch (event.type) {
	// 		case 'click':
	// 			setUniqueDebit(getDataFromLocal());
	// 			console.log('uniqueTransactions\n', uniqueDebit);
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// };

	const setDefault = () => {
		let localData = [{} as DebtorType];
		localData = getDataFromLocal();
		if (!localData[0].Date) {
			// setUniqueDebit(localData);
			console.log(localData[0].Description);
		} else {
			// setUniqueDebit(getDataFromLocal());
		}
	};

	return (
		<>
			<ul>
				{uniqueDebit.map((debit: string, idx: number) => (
					<li key={idx}>{debit}</li>
				))}
			</ul>
		</>
	);
};

export default FilterUnique;
