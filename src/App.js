import './App.css';
import React from 'react';
import Dashboard from './Dashboard';
import Homescreen from './pages/Homescreen';
import {useState } from 'react';
import DataOne from './pages/cardsdata/DataOne';
import AllShops from './pages/AllShops';
function App() {
  const [view , setView] = useState("AllShops");
  return (
    <>
      {view === "Dashboard" && (<Dashboard/>)}
      {view === 'Homescreen' && (<Homescreen/>)}
      {view === 'DataOne' && (<DataOne/>)}
      {view === 'AllShops' && (<AllShops/>)}
    </>
    
  );
}

export default App;
