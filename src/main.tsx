import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { DebitProvider } from './services/debitContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<DebitProvider>
			<App />
		</DebitProvider>
	</React.StrictMode>
);
