import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { getUniqueItems } from '../../services/data-filters.ts';
import { DebitContext } from '../../services/debitContext.tsx';
import { ArrowDropDown } from '@mui/icons-material';
import './filterUnique.css';

// Probabaly refactor this component as it does more than just filter unique debit items

/**
 * This component filters unique debit items from the debitData context and displays them as a list of checkboxes.
 * @component
 * @example
 * return (
 *   <FilterUnique />
 * )
 */
export const FilterUnique = () => {
	const { debitData, setDebitData } = useContext(DebitContext);
	const [uniqueDebit, setUniqueDebit] = useState([]);
	let currentDebit;

	/**
	 * Handles the file loaded event by filtering unique items from debitData.
	 * @function
	 */
	const handleFileLoaded = () => {
		const filteredData: any = getUniqueItems(debitData);
		setUniqueDebit(filteredData);
	};

	/**
	 * Handles change events for input elements.
	 * @function
	 * @param {Event} e - The event object.
	 */
	const handleChangeEvent = (e: Event) => {
		const target = e.target as HTMLInputElement;

		if (target.type === 'checkbox') {
			if (target.checked) {
				console.log('target checked');
			} else {
				console.log('target unchecked');
			}
		}
	};

	useEffect(() => {
		if (debitData.length > 0) {
			handleFileLoaded();
		}

		window.addEventListener('file-loaded', handleFileLoaded);
		window.addEventListener('change', handleChangeEvent);

		return () => {
			window.removeEventListener('file-loaded', handleFileLoaded);
			window.removeEventListener('change', handleChangeEvent);
		};
	}, [debitData]);

	/**
	 * Sets the current debit based on the checkbox label.
	 * @function
	 * @param {Event} e - The event object.
	 */
	const setCheckedDebit = (e: any) => {
		const target = e.target as HTMLInputElement;
		currentDebit = target.labels && target.labels.length > 0 ? target.labels[0].innerText : 'No labels found';
	};

	return (
		<>
			<Accordion defaultExpanded={true}>
				<AccordionSummary expandIcon={<ArrowDropDown />} aria-controls='panel2-content' id='panel2-header'>
					<Typography>Unique Debits</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						{uniqueDebit.map((debit: string, index: number) => (
							<li key={index}>
								{/* Add checkboxes back in when a better use case can be concieved */}
								{/* <input type='checkbox' id={`checkbox-${index}`} onChange={setCheckedDebit} /> */}
								<label htmlFor={`checkbox-${index}`}>{debit}</label>
							</li>
						))}
					</ul>
				</AccordionDetails>
			</Accordion>
		</>
	);
};
