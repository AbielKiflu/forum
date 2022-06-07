import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Textfield} from './components/textfield/Textfield';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Textfield type="text" > </Textfield>
  </React.StrictMode>
);

 