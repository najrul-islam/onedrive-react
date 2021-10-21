import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { OneDriveJsx } from './Components/OneDriveJsx';
import { OneDriveTsx } from './Components/OneDriveTsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <OneDriveJsx /> */}
    <OneDriveTsx />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
