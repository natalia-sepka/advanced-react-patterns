import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ErrorBoundry } from "./components/error-boundary";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ErrorBoundry fallback={<h1>Error at App level</h1>}>
          <App />
      </ErrorBoundry>
  </React.StrictMode>
);

