import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Dashboard from './Dashboard';
import Homescreen from './pages/Homescreen';
import DataOne from './pages/cardsdata/DataOne';
import AllShops from './pages/AllShops';
import Nav from './pages/components/Nav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/pages/Homescreen' element={<Homescreen/>}></Route>
        <Route path='/pages/cardsdata/DataOne' element={<DataOne/>}></Route>
        <Route path='/pages/components/Nav' element={<Nav/>}></Route>
        <Route path='/pages/AllShops' element={<AllShops/>}></Route>
      </Routes>
    </Router>
    // <DataOne/>
  );
}

export default App;
