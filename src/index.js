import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.render(
  <RecoilRoot>
    <ErrorBoundary >
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.Suspense>
    </ErrorBoundary>
  </RecoilRoot>,
  document.getElementById('root')
);

