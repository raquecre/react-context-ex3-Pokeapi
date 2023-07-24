import './App.css';
import Pokedex from './components/Pokedex';
import ErrorPage from './components/ErrorPage';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import CartContextProvider  from './components/context/contextCart';
import React from "react"

function App() {
  

  return (
    <div className="App">

      <NavBar />
      <CartContextProvider>
        <Routes>

          <Route path="/" element={<Pokedex />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartContextProvider>


    </div>
  );
}

export default App;
