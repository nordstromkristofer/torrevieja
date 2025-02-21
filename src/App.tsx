import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from './header/headerlinx/todo';
import B4leave from './header/headerlinx/b4leave';
import Contact from './header/headerlinx/contact';
import Home from "./Home"

import './Home.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/b4leave" element={<B4leave />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
