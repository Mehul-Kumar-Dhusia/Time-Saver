import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MyContextProvider } from './MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </MyContextProvider>
);
