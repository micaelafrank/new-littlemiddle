import React, { useEffect, useState } from 'react';
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
import SignUp from './SignUp';


function App() {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, [])
  console.log(user);


  useEffect(() => {
    fetch("/api/users").then((r) => {
      if (r.ok) {
        r.json().then((customers) => setCustomers(customers));
      }
    })
  }, [])
  console.log("all users: ", customers);


  useEffect(() => {
    fetch("/api/orders")
      .then(res => res.json())
      .then(data => { setOrders(data) })
  }, [])
  console.log("orders: ", orders)


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


  function onLogin(user) {
    setUser(user)
  }

  return (
    <div>
      <Routes>
        <Route element={<WithNav user={user} setUser={setUser} />}>
          <Route path="/" element={<Home friDate={friDate} nextSunDate={nextSunDate} />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/signup" element={<SignUp onSignUp={setUser} user={user} />} />
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
