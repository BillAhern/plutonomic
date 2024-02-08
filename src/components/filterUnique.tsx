import React, { useEffect, useState } from 'react';
import getDataFromLocal from '../services/session-data.js';

const FilterUnique: React.FC = () => {
	const [uniqueTransactions, setUniqueTransactions] = useState([]);

	useEffect(() => {
		setUniqueTransactions(getDataFromLocal());
	}, []);

	// Onve data is loaded into storage, filter it
	addEventListener('file-loaded', () => {
		// use setUniqueTransactions to put filtered data into state
		console.log(getDataFromLocal());
	});

	// Experimenting here with a switch event handler
	const handleEvent = (event: any) => {
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
			<button type='button' value={'Get Default Sort'} onClick={handleEvent}>
				Get default
			</button>
			<hr />
		</>
	);
};

export default FilterUnique;
