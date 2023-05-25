import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Breweries from './pages/Breweries/Breweries';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites';
import BreweryDetail from './pages/Breweries/BreweryDetail';
import { setUserToken, clearUserToken } from './utils/authToken'
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';


function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const registerUser = async (data) => {
    try{
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }

      const newUser = await fetch(
        "https://njbeer-app-backend.onrender.com/auth/register",
        configs
      )

      const parsedUser = await newUser.json();

      setUserToken(parsedUser.token);
      setCurrentUser(parsedUser.currentUser);
      setIsAuthenticated(parsedUser.loggedIn);

      return parsedUser

    }catch(err) {
      console.log(err)
      clearUserToken();
      setIsAuthenticated(false);
    }
  }
  //console.log(JSON.stringify(currentUser))

  const loginUser = async (data) => {
    try{
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
      const response = await fetch(
        "https://njbeer-app-backend.onrender.com/auth/login",
        configs
      )
      const user = await response.json();
      console.log(JSON.stringify(user))
      

      setUserToken(user.token);
      setCurrentUser(user.user);
      setIsAuthenticated(user.loggedIn);

      return user
    }catch(err) {
      clearUserToken();
      setIsAuthenticated(false)
    }
  }
// console.log(currentUser)


  return (
    <div className="App">
      <h1 className="websiteName">NJ Brew</h1>
      <Header user={currentUser} />
      <Routes>
        <Route path="/auth/register" element={<Register isLoggedIn={isAuthenticated} signUp={registerUser} user={currentUser} />} />
        <Route path="/auth/login" element={<Login login={loginUser} isLoggedIn={isAuthenticated} user={currentUser} />}/>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/breweries'> 
          <Route path='' element={<Breweries />} />
          <Route path=':breweryId'>
              <Route path='' element={<BreweryDetail />} />
              </Route>      
          </Route>
         

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
