import React from 'react';
import Home from './Home';
import Login from './Login';
import OrderForm from './OrderForm';
import { Route, Routes } from 'react-router-dom';
// import About from "./About";
import ImageGallery from './ImageGallery';
import Donations from './Donations';
import ConfirmOrder from './ConfirmOrder';
// import NavBar from './NavBar';
import WithNav from './WithNav';

function App() {
  const curr = new Date();
  const today = `${curr.getMonth() + 1}/${curr.getDate()}/${curr.getFullYear()}`;
  console.log("today's date: ", today);

  const firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  const fridayDate = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
  const friDate = `${fridayDate.getMonth() + 1}/${fridayDate.getDate()}/${fridayDate.getFullYear()}`;

  console.log("testing: ", friDate);
  console.log("first day to order: ", firstday);
  console.log("last day: ", fridayDate);

  const nextWeekFirstDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));
  const nextSunDate = `${nextWeekFirstDay.getMonth() + 1}/${nextWeekFirstDay.getDate()}/${nextWeekFirstDay.getFullYear()}`;

  console.log("next week's order will open on sunday: ", nextSunDate);


  return (
    <div>
      <Routes>
        <Route element={<WithNav />}>
          <Route path="/" element={<Home friDate={friDate} nextSunDate={nextSunDate} />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/order" element={<OrderForm friDate={friDate} />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/confirmation" element={<ConfirmOrder friDate={friDate}/>} />
          <Route path="/donations" element={<Donations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
