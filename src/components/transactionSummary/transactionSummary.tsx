import React, { useContext } from 'react';
import './transactionSummary.css';
import { DebitContext } from '../../services/debitContext.tsx';

const TransactionSummary = () => {
	const { debitData, setDebitData } = useContext(DebitContext);

	return (
		<>
			<h4>Transaction Summary</h4>
			Total Income: $100 <br />
			Total Expenses: $75 <br />
			(Dynamic title: Surplus / Deficit): Surplus $25
		</>
	);
};

export default TransactionSummary;
