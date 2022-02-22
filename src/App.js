import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Calculate from './pages/Calculate';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <>

    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculate />} />
      <Route path="/quotes" element={<Quote />} />
    </Routes>
  </>
);

export default App;
