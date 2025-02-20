import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "./calendar/Calendar"
import Home from "./Home"

import './Home.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
