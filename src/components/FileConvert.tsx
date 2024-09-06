import React, { useEffect, useContext, useState } from 'react';
import Papa from 'papaparse';
import { DebitContext } from '../services/debitContext.ts';
import { DebtorType } from '../types.ts';

const FileConvert = () => {
	const { debitData, setDebitData } = useContext(DebitContext);

	let csvData: any;
	let converted: any;
	let convertedDataArray: DebtorType[];

	useEffect(() => {
		console.log(debitData);
	}, []);

	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
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
			<input type='file' onChange={handleFileChange} />
		</div>
	);
};

export default FileConvert;
