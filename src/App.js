import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Dashboard from './pages/trangchu';
import Quanlive from './pages/quanlive';
import Doisoatve from './pages/doisoatve';
import Caidat from './pages/caidat/caidat';
// import Caidat from './pages/caidat';
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/quanlive" element={<Quanlive />} />
          <Route path="/doisoatve" element={<Doisoatve />} />
          <Route path="/caidat" element={<Caidat/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;