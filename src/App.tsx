import './App.css';
import { FileConvert } from './components/fileConvert/fileConvert.tsx';
import { FilterUnique } from './components/filterUnique/filterUnique.tsx';
import ReconcilePayPal from './components/reconcilePaypal/reconcilePayPal.tsx';
import logo from '../src/assets/logo-80.png';
import TransactionSummary from './components/transactionSummary/transactionSummary.tsx';

const App = () => {
	return (
		<>
			<div className='header'>
				<img className='logo' src={logo} alt='plutonomic logo' />
				<h1 className='title'>Plutonomic</h1>
				<p className='app-name'>plutonomic (adj.) "of or pertaining to the science or study of wealth."</p>
				<div className='filter-select'>
					Load bank statement <br />
					<FileConvert />
				</div>
				<div className='paypal-select'>
					Load PayPal statement <br />
					<ReconcilePayPal />
				</div>
			</div>
			<div className='grid'>
				<div className='grid-item list-unique'>
					<FilterUnique />
				</div>
				<div className='grid-item transaction-summary'>
					<TransactionSummary />
				</div>
				<div className='grid-item'></div>
				<div className='grid-item'></div>
				<div className='grid-item'></div>
				<div className='grid-item'></div>
				<div className='grid-item'></div>
			</div>
		</>
	);
};

export default App;
