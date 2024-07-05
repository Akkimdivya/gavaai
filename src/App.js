import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Components/Layout';
import Airports from './Pages/Airports';
import Airport from './Pages/Airport';
import './App.css';
import HomePage from './Components/Home';
import Video from './Components/Video';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/videos' element={<Video/>}/>
          <Route path="/airports" element={<Airports />} />
          <Route path="/airports/:id" element={<Airport />} />
        </Routes>
      </Layout>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
