import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SeatSelector from './components/SeatSelector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SeatSelector />} />
      </Routes>
    </Router>
  );
}

export default App;
