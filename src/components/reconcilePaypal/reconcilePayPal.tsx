import Papa from 'papaparse';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { DebitContext } from '../../services/debitContext.tsx';
import { PayPalType, DebtorType } from '../../types.ts';
import './reconcilePayPal.css';

/**
 * ReconcilePayPal component handles the reconciliation of PayPal data with debit data.
 * It reads a CSV file, filters the PayPal data, and updates the debit data accordingly.
 *
 * @component
 */
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
		}
	}, [payPalData]);

	/**
	 * Handles file change event, reads the CSV file, parses it, filters the PayPal data,
	 * and updates the state with the filtered data.
	 *
	 * @param {ChangeEvent<HTMLInputElement>} event - The file input change event.
	 */
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

	/**
	 * Filters PayPal data to include only completed transactions.
	 *
	 * @param {PayPalType[]} payPalData - The PayPal data to filter.
	 * @returns {PayPalType[]} - The filtered PayPal data.
	 */
	const filterPayPalData = (payPalData: PayPalType[]): PayPalType[] => {
		return payPalData.filter((item) => item.Status === 'Completed');
	};

	/**
	 * Reconciles debit data with PayPal data by matching amounts and updating descriptions.
	 *
	 * @param {DebtorType[]} debitData - The debit data to reconcile.
	 * @param {PayPalType[]} payPalData - The PayPal data to reconcile with.
	 * @returns {DebtorType[]} - The reconciled debit data.
	 */
	const reconcileDataFromPayPal = (debitData: DebtorType[], payPalData: PayPalType[]) => {
		const reconciledDebitData: DebtorType[] = [];

		try {
			debitData.forEach((debitItem) => {
				const isPayPal = getIsPayPal(debitItem);

				if (isPayPal) {
					payPalData.forEach((payPalItem) => {
						if (payPalItem.Gross === debitItem.Amount) {
							debitItem.Description = payPalItem.Name;
							reconciledDebitData.push(debitItem);
						}
					});
				} else {
					reconciledDebitData.push(debitItem);
				}
			});

			return reconciledDebitData;
		} catch (e) {
			console.log('reconcilePaypal > reconcileDataFromPayPal: ', e);
		}
	};

	/**
	 * Checks if a debit item is a PayPal transaction.
	 *
	 * @param {DebtorType} debitItem - The debit item to check.
	 * @returns {boolean} - True if the debit item is a PayPal transaction, false otherwise.
	 */
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
