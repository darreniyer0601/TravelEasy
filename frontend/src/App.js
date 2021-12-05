import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// Layout
import Navbar from './components/layout/Navbar';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path='' element={} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/search' element={<Search />} />
        <Route path='/homepage' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
