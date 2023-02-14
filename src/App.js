import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Componets/Header/Header';
import Footer from './Componets/Footer/Footer'
import Home from './Componets/Home/Home';
import Legendarios from './Componets/Legendarios/Legendarios';
import Pokedex from './Componets/Pokedex/Pokedex'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <main className='mainContainer'>
             <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pokedex" element={<Pokedex/>}/>
                <Route path="/legendarios" element={<Legendarios />}/>
             </Routes>
          </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
