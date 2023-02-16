import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar/NavigationBar.js'

import MainPage from './components/MainPage/MainPage.js';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Pricing from './components/Pricing/pricing.js';
import Contact from './components/Contact/contact.js';
import SignIn from './components/NavigationBar/SignUp.js';
import AllDogs from './components/Dogs/alldogs.js';

const App = () => {

  return (
    <>
    
      <NavigationBar/>
      
    <Routes>
      <Route exact path="/" element={<MainPage/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/dogs" element={<AllDogs/>}></Route>
    </Routes>
    
      
    
    </>
  );
}

export default App;

//ToDo Dog Api