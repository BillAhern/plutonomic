import React, { useEffect, useState } from 'react';
import getDataFromLocal from '../services/session-data.js';

const FilterUnique: React.FC = () => {
	const [uniqueDebit, setUniqueDebit] = useState([]);
	let sessionData;

	useEffect(() => {
		setUniqueDebit(getDataFromLocal());
	}, []);

	// Once data is loaded into storage, filter it
	addEventListener('file-loaded', () => {
		// use setUniqueTransactions to put filtered data into state
		// console.table(getDataFromLocal());
		if (getDataFromLocal()) {
			sessionData = getDataFromLocal();
			setUniqueDebit(sessionData);
		}
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

	return (
		<>
			{uniqueDebit.map((debit: string, idx: number) => (
				<ul>
					<li key={idx}>{debit}</li>
				</ul>
			))}
			<hr />
		</>
	);
};

export default FilterUnique;
