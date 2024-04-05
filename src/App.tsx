import './App.css';
import FileConvert from './components/fileConvert.tsx';
import FilterUnique from './components/filterUnique.tsx';
import logo from '/logo.svg';

function App() {
	return (
		<>
			<div className='header'>
				<img className='logo' src={logo} alt='plutonomic logo' />
				<h1 className='title'>Plutonomic</h1>
				<p>plutonomic (adj.) "of or pertaining to the science or study of wealth or riches".</p>
				<div className='filter-select'>
					<FileConvert />
				</div>
			</div>
			<div className='grid'>
				<div className='grid-item list-unique'>
					<FilterUnique />
				</div>
				<div className='grid-item daily-spend'></div>
				<div className='grid-item weekly-spend'></div>
				<div className='grid-item'></div>
				<div className='grid-item'></div>
				<div className='grid-item'></div>
				<div className='grid-item'></div>
			</div>
		</>
	);
}

export default App;
