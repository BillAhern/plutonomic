import Papa from 'papaparse';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { DebitContext } from '../services/debitContext.tsx';
import { PayPalType, DebtorType } from '../types.ts';
import './reconcilePayPal.css';

const ReconcilePayPal = () => {
	const { debitData, setDebitData } = useContext(DebitContext);
	const [payPalData, setPayPalData] = useState<PayPalType[]>([]);

	let csvData: any;
	let converted: any;
	let reconciledData: any;

	useEffect(() => {
		if (payPalData.length > 0) {
			reconciledData = reconcileDataFromPayPal(debitData, payPalData);
			setDebitData(reconciledData);
			console.log('check debit data', debitData);
		}
	}, [payPalData]);

	const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
		try {
			const file = event.target.files![0];
			const fileReader = new FileReader();

			fileReader.onload = async (event: any) => {
				csvData = event.target.result;
				converted = Papa.parse(csvData, { header: true });
				const filteredPaypalData = filterPayPalData(converted.data);
                setPayPalData(filteredPaypalData);
                dispatchEvent(new Event('file-loaded'));
			};

			fileReader.readAsText(file);
		} catch (error) {
			console.log(`\nhandleFileChange => ERROR: ${error}\n`);
		}
	};

	const filterPayPalData = (payPalData: PayPalType[]): PayPalType[] => {
		return payPalData.filter((item) => item.Status === 'Completed');
	};

	const reconcileDataFromPayPal = (debitData: DebtorType[], payPalData: PayPalType[]) => {
		const reconciledDebitData: DebtorType[] = [];

		debitData.forEach((debitItem) => {
			const isPayPal = getIsPayPal(debitItem);

			if (isPayPal) {
				payPalData.forEach((payPalItem) => {
					if (payPalItem.Gross === debitItem.Amount) {
						console.log(payPalItem);
						debitItem.Description = payPalItem.Name;
						reconciledDebitData.push(debitItem);
					}
				});
			} else {
				reconciledDebitData.push(debitItem);
			}
		});

		return reconciledDebitData;
	};

	const getIsPayPal = (debitItem: DebtorType) => {
		if (debitItem && debitItem.Description) {
			return debitItem.Description.includes('PAYPAL');
		}
	};

	return (
		<div>
			<input type='file' onChange={handleFileChange} />
		</div>
	);
};

export default ReconcilePayPal;
