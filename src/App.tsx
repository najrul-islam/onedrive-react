import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GraphFileBrowser } from '@microsoft/file-browser';
import { useLocation, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory();
  const query_param = history.location.search;
  const access_token = new URLSearchParams(query_param).get('access_token');
  return (
    <Router {...{ history }}>
      <GraphFileBrowser
        getAuthenticationToken={() => Promise.resolve(access_token ?? "")}
      />
    </Router>
  );
}

export default App;
