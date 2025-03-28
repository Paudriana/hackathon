import React from 'react'; // Importa React
import ReactDOM from 'react-dom'; // Importa ReactDOM
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter desde react-router-dom
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( // Usa ReactDOM.render en lugar de createRoot
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);