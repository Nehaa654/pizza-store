/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import DisplayAllItems from './components/DisplayAllItems';
import AddNewItem from './components/AddNewItem';
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';
import Contact from './components/Contact';

// Navbar component definition
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Pizza Store</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pizzas">Pizzas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">Add New Item</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


function App() {
  return (
    <>
   
    <Router>
      <Navbar /> {/* Include the Navbar component */}
      <div className="container mt-4"> {/* Adjust margin if necessary */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pizzas" element={<DisplayAllItems />} />
          <Route path="/add" element={<AddNewItem />} />
          <Route path="/update/:id" element={<UpdateItem />} />
          <Route path="/delete/:id" element={<DeleteItem />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
    </>
  );
}

export default App;