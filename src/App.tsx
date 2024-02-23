import './App.css';
import logo from '/logo.svg';
import FileConvert from './components/FileConvert.tsx';
import FilterUnique from './components/filterUnique.tsx';

function App() {
	return (
		<div className='main-container'>
			<div>
				<img src={logo} className='logo' alt='plutonomic logo' />
			</div>
			<h1>Plutonomic</h1>
			<div className='card'></div>
			<p>plutonomic (adj.) "of or pertaining to the science or study of wealth or riches".</p>
			<FileConvert />
			<FilterUnique />
		</div>
	);
}

export default App;
