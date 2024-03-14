import './App.css';
import logo from '/logo.svg';
import FileConvert from './components/FileConvert.tsx';
import FilterUnique from './components/filterUnique.tsx';

function App() {
	return (
		<div className='grid-container' id="grid">
			<div className='header'>
				<div className='header-row'>
					<img className='logo' src={logo} alt='plutonomic logo' />
					<h1 className='title'>Plutonomic</h1>
					<div className='filter-select'>
						<FileConvert />
					</div>
				</div>
				<p>plutonomic (adj.) "of or pertaining to the science or study of wealth or riches".</p>
			</div>
			<div className='list-unique'>
				<FilterUnique />
			</div>
			<div className='daily-spend'>Daily Spend</div>
			<div className='weekly-spend'>Weekly Spend</div>
		</div>
	);
}

export default App;
