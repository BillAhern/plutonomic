import React, { ChangeEvent, useEffect, useState } from 'react';
import { getUniqueItems } from '../services/data-filters.ts';

const filters: React.FC = () => {
	const [cachedData, setCachedData] = useState([{}]);

	const getDataFromLocal = () => {
		let parsedDataString: any;
		const checkSessionStorage = window.sessionStorage.getItem('pluto');

		if (checkSessionStorage) {
			parsedDataString = JSON.parse(checkSessionStorage);
			setCachedData(getUniqueItems(parsedDataString));
		} else {
			parsedDataString = 'No data in SessionStorage.';
		}

		return cachedData;
	};

	const handleClick = async (event: any) => {
		switch (event.type) {
			case 'click':
				getDataFromLocal();
				console.log('\ncachedData\n', cachedData);

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
