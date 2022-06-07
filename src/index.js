import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './index.css';
import {Header} from './components/header/Header';
import Login from './layouts/Login';
import Register from './layouts/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Header/>
      <Routes>
          <Route path="/login" element={ <Login/>}/>
          <Route path="/register"  element={ <Register/> }/>

      </Routes>
   </Router>
  </React.StrictMode>
);

 