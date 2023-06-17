import React from 'react';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import OurDevs from './components/OurDevs';
import NextLink from './components/NextLink';

function App() {
  return (
    <div className="text-center">
      <NavBar />
      <Routes>
        <Route path="/" element={<OurDevs />} />
        <Route path="/next_link" element={<NextLink />} />
      </Routes>
    </div>
  );
}

export default App;
