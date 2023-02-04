import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js'

import Rotas from './Routes/Route'
import '../src/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Rotas>
       <App />
     </Rotas>
  </React.StrictMode>
);


