import { ThemeProvider } from 'context/styles/ThemeContext';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const Main = () => {

  return (
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />)
