import { useState } from 'react';
import reactLogo from './assets/react.svg';
import logo from '/logo.svg';
import './App.css';

function App() {
	return (
		<>
			<div>
				<img src={logo} className='logo' alt='Vite logo' />
			</div>
			<h1>Plutonomic</h1>
			<div className='card'></div>
			<p>
				plutonomic (adj.) "of or pertaining to the science or study of wealth or riches," 1853, from Greek ploutos "wealth" (see Pluto) + ending from economic. Fell from
				currency 1870s, revived 1990s. Related: Plutonomy (1851); plutonomics (1991, a 19c. word for "the science of wealth and the natural laws governing its production
				and distribution" was plutology); plutonomist (1869).
			</p>
		</>
	);
}

export default App;