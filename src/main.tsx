import { AuthProvider } from 'context/auth/AuthContext';
import { ThemeProvider } from 'context/styles/ThemeContext';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<AuthProvider>
				<App />
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
