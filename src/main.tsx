import { AuthProvider } from 'context/auth/AuthContext';
import { ThemeProvider } from 'context/styles/ThemeContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/routes';

import App from './App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<AuthProvider>
				<BrowserRouter>
					<App>
						<Routes />
					</App>
				</BrowserRouter>
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
