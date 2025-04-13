import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './halaman/Home';
import BacaAlQuran from './halaman/BacaAlQuran';
import JuzAmma from './halaman/JuzAmma';
import AsmaulHusna from './halaman/AsmaulHusna';
import Navbar from './komponen/NavigasiBar';
import Footer from './komponen/Footer';
import SurahDetail from './halaman/SurahDetail';


function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quran" element={<BacaAlQuran />} />
        <Route path="/juzamma" element={<JuzAmma />} />
        <Route path="/asmaulhusna" element={<AsmaulHusna />} />
        <Route path="/surah/:nomor" element={<SurahDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
