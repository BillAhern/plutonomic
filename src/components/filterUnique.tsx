import React, { useEffect, useState, useContext } from 'react';
import { DebitContext } from '../services/debitContext.ts';
import { getUniqueItems } from '../services/data-filters.ts';
import getDataFromLocal from '../services/session-data.js';
import { DebtorType } from '../types.ts';
import './filterUnique.css';

const FilterUnique: React.FC = () => {
	const [uniqueDebit, setUniqueDebit] = useState([]);
	const [checkUnique, setCheckUnique] = useState([]);
	let sessionData;
	let currentDebit;

	useEffect(() => {
		setDefault();
	}, []);

	addEventListener('file-loaded', () => {
		sessionData = getDataFromLocal();
		const filteredData = getUniqueItems(sessionData);
		setUniqueDebit(filteredData);
	});

	addEventListener('change', (e: Event) => {
		const target = e.target as HTMLInputElement;

		if (target.type === 'checkbox') {
			if (target.checked) {
				console.log('target checked');
			} else {
				console.log('target unchecked');
			}
		}
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

	const setCurrentDebit = (e: any) => {
		const target = e.target as HTMLInputElement;
		currentDebit = target.value;
		console.log(currentDebit);
	};

	return (
		<>
			<ul>
				{uniqueDebit.map((debit: string, index: number) => (
					<li key={index}>
						<input type='checkbox' id={`checkbox-${index}`} onChange={setCurrentDebit} />
						<label htmlFor={`checkbox-${index}`}>{debit}</label>
					</li>
				))}
			</ul>
		</>
	);
};

export default FilterUnique;
