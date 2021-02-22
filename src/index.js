import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Fallback from './components/Fallback';

ReactDOM.render(
  <RecoilRoot>
    <ErrorBoundary >
      <React.Suspense fallback={<Fallback />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.Suspense>
    </ErrorBoundary>
  </RecoilRoot>,
  document.getElementById('root')
);

