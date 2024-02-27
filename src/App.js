import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Dashboard from './Dashboard';
import Homescreen from './pages/Homescreen';
import DataOne from './pages/cardsdata/DataOne';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/pages/Homescreen' element={<Homescreen/>}></Route>
        <Route path='pages/cardsdata/DataOne' element={<DataOne/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
