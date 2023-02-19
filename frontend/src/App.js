import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar/NavigationBar.js'
import MainPage from './components/MainPage/MainPage.js';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/contact.js';
import SignIn from './components/NavigationBar/SignIn.js';
import AllDogs from './components/Dogs/alldogs.js';
import Pricing from './components/Pricing/materialpricing.js';
import SignUp from './components/NavigationBar/SignUp.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { restoreUser } from './store/session.js';
import DemoUser from './components/NavigationBar/DemoUser.js';
import { useCurrentUser } from './context/DogContext.js';
import Downloads from './components/MainPage/Downloads.js';
import AppinProgress from './components/NavigationBar/AppinProgress.js';
import MatchMakingDogs from './components/Dogs/matchmakingdogs.js';
import ChatWidget from './components/Chat Widget/ChatWidget.js';
import ChatPage from './components/Chat Widget/ChatPage.js';

const App = () => {
  const dispatch = useDispatch()

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  const user = useSelector(state => state.session)

  return (
    <>
    
    <NavigationBar isLoaded={isLoaded}/>

    {isLoaded && ( 
    <Routes>
      <Route exact path="/" element={<MainPage/>}></Route>
      <Route path="/download" element={<Downloads/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/dogs" element={<AllDogs/>}></Route>
      <Route path="/demouser" element={<DemoUser/>}></Route>
      <Route path="/tba" element={<AppinProgress/>}></Route>
      <Route path="/chat" element={<ChatPage/>}></Route>
      <Route path="/dogs/matchmaking" element={<MatchMakingDogs/>}></Route>
    </Routes>
    )} 
      
    
    </>
  );
}

export default App;

//ToDo Dog Api