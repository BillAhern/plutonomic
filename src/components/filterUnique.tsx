import React, { useEffect, useState } from 'react';
import { getUniqueItems } from '../services/data-filters.ts';
import getDataFromLocal from '../services/session-data.js';
import { DebtorType } from '../types.ts';
import './filterUnique.css';

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
