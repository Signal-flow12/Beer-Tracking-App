import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Breweries from './pages/Breweries';
import Home from './pages/Home';
import HomeShowPage from './pages/HomeShowPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/breweries' element={<Breweries />} />

      </Routes>
    </div>
  );
}

export default App;
