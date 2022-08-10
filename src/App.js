import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
