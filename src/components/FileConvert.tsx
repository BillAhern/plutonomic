import React from 'react';
import Papa from 'papaparse';

function FileConvert(): JSX.Element {
	/**
	 * Loads local user CSV file and convers it into JSON for SessionStorage
	 * @param event
	 */
	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const file = event.target.files![0];
			const fileReader = new FileReader();

			fileReader.onload = async (event: any) => {
				const csvData = event.target.result;
				const converted = Papa.parse(csvData, { header: true });
				const parsedData = converted?.data;

				window.sessionStorage.setItem('pluto', JSON.stringify(parsedData));
			};

			fileReader.readAsText(file);
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
