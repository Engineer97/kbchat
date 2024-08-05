import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DeveloperBot from './pages/DeveloperBot';
import EmployeeBot from './pages/EmployeeBot'

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developer" element={<DeveloperBot />} />
        <Route path="/employee" element={<EmployeeBot />} />
      </Routes>
    </Router>
  );
};

export default App;
