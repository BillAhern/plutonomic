import React from 'react';
import Papa from 'papaparse';
import getDataFromLocal from '../services/session-data.js';

function FileConvert(): JSX.Element {
	/**
	 * Loads local user CSV file and converts it into JSON for SessionStorage
	 * @param event
	 */
	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		// addEventListener('file-loaded', () => {
		// 	console.log('storage event heard');
		// });

		try {
			const file = event.target.files![0];
			const fileReader = new FileReader();

			fileReader.onload = async (event: any) => {
				const csvData = event.target.result;
				const converted = Papa.parse(csvData, { header: true });
				const parsedData = converted?.data;

				sessionStorage.setItem('pluto', JSON.stringify(parsedData));
				dispatchEvent(new Event('file-loaded'));
			};

			fileReader.readAsText(file);

			getDataFromLocal();
		} catch (error) {
			console.log(`\nhandleFileChange => ERROR: ${error}\n`);
		}
	};

	return (
		<div>
			<input type='file' onChange={handleFileChange} />
		</div>
	);
}

export default FileConvert;
