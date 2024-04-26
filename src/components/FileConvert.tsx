import React, { useContext, useState } from 'react';
import Papa from 'papaparse';
import getDataFromLocal from '../services/session-data.ts';
import { DebitContext } from '../services/debitContext.ts';
import { DebtorType } from '../types.ts';

const FileConvert = () => {
	const debitData = useContext(DebitContext);
	const [debitDataState, setDebitDataState] = useState(debitData);

	/**
	 * Asynchronously handles a file change event.
	 *
	 * @async
	 * @function handleFileChange
	 * @param {React.ChangeEvent<HTMLInputElement>} event - The file change event.
	 * @throws Will throw an error if reading the file fails.
	 *
	 * This function does the following:
	 * 1. Retrieves the first file from the file list of the input event.
	 * 2. Creates a new FileReader to read the file.
	 * 3. Sets the onload event handler of the FileReader to:
	 *    a. Parse the CSV data from the file.
	 *    b. Store the parsed data in the session storage under the key 'pluto'.
	 *    c. Dispatch a 'file-loaded' event.
	 * 4. Starts reading the file as text.
	 * 5. Calls the function getDataFromLocal().
	 */
	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const file = event.target.files![0];
			const fileReader = new FileReader();

			fileReader.onload = async (event: any) => {
				const csvData = event.target.result;
				const converted = Papa.parse(csvData, { header: true });
				const parsedData: DebtorType[] = converted?.data as DebtorType[];

				sessionStorage.setItem('pluto', JSON.stringify(parsedData));
				setDebitDataState(parsedData);
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
};

export default FileConvert;
