import Papa from 'papaparse';
import { ChangeEvent, useContext } from 'react';
import { DebitContext } from '../../services/debitContext.tsx';
import { DebtorType } from '../../types.ts';
import './filterConvert.css';

/**
 * This component allows users to upload a CSV file, parses the file, and updates DebitContext with the parsed data.
 * @component
 * @example
 * return (
 *   <FileConvert />
 * )
 */
export const FileConvert = () => {
	const { debitData, setDebitData } = useContext(DebitContext);

	let csvData: any;
	let converted: any;
	let convertedDataArray: DebtorType[];

	/**
	 * Handles the file change event, reads the file, parses it, and updates DebitContext.
	 * @function
	 * @param {React.ChangeEvent<HTMLInputElement>} event - The file change event.
	 */
	const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
		try {
			const file = event.target.files![0];
			const fileReader = new FileReader();

			fileReader.onload = async (event: any) => {
				csvData = event.target.result;
				converted = Papa.parse(csvData, { header: true });
				convertedDataArray = converted?.data as DebtorType[];

				setDebitData(convertedDataArray);
				dispatchEvent(new Event('file-loaded'));
			};

			fileReader.readAsText(file);
		} catch (error) {
			console.log(`\nhandleFileChange => ERROR: ${error}\n`);
		}
	};

	return (
		<div>
			<input id='file-upload' className='input-button' type='file' onChange={handleFileChange} />
		</div>
	);
};
