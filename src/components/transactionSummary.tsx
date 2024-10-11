import React, { useContext } from 'react';
import './transaction-summary.css';
import { DebitContext } from '../services/debitContext.tsx';

const TransactionSummary = () => {
    const { debitData, setDebitData } = useContext(DebitContext);
    

    return (
        <>

        </>
    )};

export default TransactionSummary;