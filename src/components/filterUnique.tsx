import { useContext, useEffect, useState } from 'react';
import { getUniqueItems } from '../services/data-filters.ts';
import { DebitContext } from '../services/debitContext.tsx';
import getDataFromLocal from '../services/session-data.js';
import './filterUnique.css';
import { DebtorType } from '../types.ts';

const FilterUnique = () => {
	const { debitData, setDebitData } = useContext(DebitContext);
	const [uniqueDebit, setUniqueDebit] = useState([]);
	let currentDebit;

	const handleFileLoaded = () => {
		const filteredData: any = getUniqueItems(debitData);
		setUniqueDebit(filteredData);
		console.log('filteredData:\n', filteredData);
	};

	const handleChangeEvent = (e: Event) => {
		const target = e.target as HTMLInputElement;

		if (target.type === 'checkbox') {
			if (target.checked) {
				console.log('target checked');
			} else {
				console.log('target unchecked');
			}
		}
	};

	useEffect(() => {
		if (debitData.length > 0) {
			handleFileLoaded();
		}

		window.addEventListener('file-loaded', handleFileLoaded);
		window.addEventListener('change', handleChangeEvent);

		return () => {
			window.removeEventListener('file-loaded', handleFileLoaded);
			window.removeEventListener('change', handleChangeEvent);
		};
	}, [debitData]);

	const setCurrentDebit = (e: any) => {
		const target = e.target as HTMLInputElement;
		currentDebit = target.labels && target.labels.length > 0 ? target.labels[0].innerText : 'No labels found';
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
