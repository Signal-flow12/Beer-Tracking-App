import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Breweries from './pages/Breweries/Breweries';
import Home from './pages/Home/Home';
import HomeShowPage from './pages/HomeShowPage';
import Favorites from './pages/Favorites';
import BreweryDetail from './pages/Breweries/BreweryDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/breweries'> 
          <Route path='' element={<Breweries />} />
          <Route path=':breweryId'>
              <Route path='' element={<BreweryDetail />} />
              </Route>      
          </Route>
         

      </Routes>
    </div>
  );
}

export default App;
