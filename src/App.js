import React from 'react';
import './App.css';
import {Router} from "@reach/router";
import MainPage from './components/MainPage';
import HistoryPage from './components/HistoryPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (<Router>
    <MainPage path="/" exact={true}/>
    <HistoryPage path="history"/>
    <NotFoundPage path='*' exact={true}/>
  </Router>);
}

export default App;
