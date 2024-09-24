import React, { useEffect, useState, useContext } from 'react';
import { DebtorType, PayPalType } from '../types.ts';
import { FileConvert } from './fileConvert.tsx';
import './reconcilePayPal.css';
import { DebitContext } from '../services/debitContext.tsx';

const ReconcilePayPal = () => {
	const { debitData, setDebitData } = useContext(DebitContext);
	const [payPal, setPayPal] = useState([]);

	return <></>;
};

export default ReconcilePayPal;
