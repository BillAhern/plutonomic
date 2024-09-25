import Papa from 'papaparse';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { DebitContext } from '../services/debitContext.tsx';
import { PayPalType, DebtorType } from '../types.ts';
import './reconcilePayPal.css';

const ReconcilePayPal = () => {
	const { debitData, setDebitData } = useContext(DebitContext);
	const [payPalData, setPayPalData] = useState([]);

	let csvData: any;
	let converted: any;
	let convertedDataArray: PayPalType[];
	let reconciledData: any;

	const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
		try {
			const file = event.target.files![0];
			const fileReader = new FileReader();

			fileReader.onload = async (event: any) => {
				csvData = event.target.result;
				converted = Papa.parse(csvData, { header: true });
				setPayPalData(converted);
				// convertedDataArray = converted?.data as PayPalType[];
				// Add the logic here to loop through debitData and replace PayPal refs in debitData with actual debtors from PayPal
				reconciledData = getDataFromPayPal(debitData, payPalData);

				setDebitData(reconciledData);
				dispatchEvent(new Event('file-loaded'));
			};

			fileReader.readAsText(file);
		} catch (error) {
			console.log(`\nhandleFileChange => ERROR: ${error}\n`);
		}
	};

    const getDataFromPayPal = (debitData: DebtorType[], payPalData: PayPalType[]) => {
        debitData.forEach(debitItem => {
            
        });
    };

	return (
		<div>
			<input type='file' onChange={handleFileChange} />
		</div>
	);
};

export default ReconcilePayPal;
