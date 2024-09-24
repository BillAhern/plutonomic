import { useState } from 'react';
import './App.css';
import DailySpend from './components/dailySpend.tsx';
import FileConvert from './components/fileConvert.tsx';
import FilterUnique from './components/filterUnique.tsx';
import WeeklySpend from './components/weeklySpend.tsx';
import { DebitContext } from './services/debitContext.ts';
import logo from '/logo.svg';
import { DebtorType } from './types.ts';

const App = () => {
	return (
		<>
			<div className='header'>
				<img className='logo' src={logo} alt='plutonomic logo' />
				<h1 className='title'>Plutonomic</h1>
				<p>plutonomic (adj.) "of or pertaining to the science or study of wealth."</p>
				<div className='filter-select'>
					Load bank statement <br />
					<FileConvert />
				</div>
				<div className='paypal-select'>
					Load PayPal statement <br />
					<FileConvert />
				</div>
			</div>
			<div className='grid'>
				<div className='grid-item list-unique'>
					<FilterUnique />
				</div>
				<div className='grid-item daily-spend'>
					<DailySpend />
				</div>
				<div className='grid-item weekly-spend'>
					<WeeklySpend />
				</div>
				<div className='grid-item'></div>
				<div className='grid-item'></div>
				<div className='grid-item'></div>
				<div className='grid-item'></div>
			</div>
		</>
	);
};

export default App;
