import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom'; // <== IMPORT
import CartContextProvider from './components/context/contextCart';

// Next, wrap the <App /> with the <Router> and </Router> tags

ReactDOM.render(
  <Router>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
