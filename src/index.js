import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './index.css';
import {Header} from './components/header/Header';
import Login from './layouts/Login';
import Home from './layouts/Home'
import Register from './layouts/Register';
import Boards from './layouts/Boards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Router>
      <Header/>
      <main>
      <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/login" element={ <Login/>}/>
          <Route path="/register"  element={ <Register/> }/>
          <Route path="/boards"  element={ <Boards/> }/>
      </Routes>
      </main>
   </Router>
);

 