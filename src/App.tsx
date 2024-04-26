import './App.css';
import FileConvert from './components/fileConvert.tsx';
import FilterUnique from './components/filterUnique.tsx';
import DailySpend from './components/dailySpend.tsx';
import WeeklySpend from './components/weeklySpend.tsx';
import getDataFromLocal from './services/session-data.ts';
import { DebitContext } from './services/debitContext.ts';
import logo from '/logo.svg';

const App = () => {
	const sessionData = getDataFromLocal();

	return (
		<>
			<div className='header'>
				<img className='logo' src={logo} alt='plutonomic logo' />
				<h1 className='title'>Plutonomic</h1>
				<p>plutonomic (adj.) "of or pertaining to the science or study of wealth or riches".</p>
				<div className='filter-select'>
					Load bank statement <br />
					<FileConvert />
				</div>
				<div className='paypal-select'>
					Load PayPal statement <br />
					<FileConvert />
				</div>
			</div>
			<DebitContext.Provider value={sessionData}>
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
			</DebitContext.Provider>
		</>
	);
};

export default App;
