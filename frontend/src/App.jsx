// import { useState } from 'react'
// import Navbar from './components/navbar.jsx';
// import Home from './components/home.jsx';

// import './App.css'

// function App() {
//    return (
//     <div className="App"> 
//     <Navbar/>
//     <Home/>
//     </div>
//    );
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Billgenerate from './components/billgenerate.jsx';
import Stock from './components/stock.jsx';
import Add_Stock from './components/add_stock.jsx';
import Sales from './components/sales.jsx';
import Salary from './components/salary.jsx';
import Login from './components/login.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bill-generate" element={<Billgenerate />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/add-stock" element={<Add_Stock />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;