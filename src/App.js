import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './index.css';
import {Header} from './components/header/Header';
import Login from './layouts/Login';
import Home from './layouts/Home'
import Register from './layouts/Register';
import Boards from './layouts/Boards';
import User from './layouts/User';
import Logout from './layouts/Logout';
const App = () =>{
  const [isLoggedIn,setIsLoggedIn] = React.useState(false);
  console.log()
   return (
      <Router>
      <Header isLoggedIn={isLoggedIn}/> 
      <main>
      <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/register"  element={ <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> }/>
          <Route path="/user"  element={ <User/> }/>
          <Route path="/logout"  element={ <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }/>
          <Route path="/boards"  element={ <Boards/> }/>
      </Routes>
      </main>
   </Router>
   );

 }
 export default App;

 