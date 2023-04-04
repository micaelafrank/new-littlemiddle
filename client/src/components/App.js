import React from 'react';
import Home from './Home';
import OrderForm from './OrderForm';
import { Route, Routes } from 'react-router-dom';
import About from "./About";
import ImageGallery from './ImageGallery';
import Donations from './Donations';


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
    </div>
  );
}

export default App;
