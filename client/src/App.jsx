import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Movie from './pages/Movie';
import Releases from './pages/Release';
import Contact from './pages/Contact';
import Booking from './pages/Bookings';
import NotFound from './pages/NotFound';

const App = () => {
  return (
   <>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/movies" element={<Movie />} />
       <Route path="/releases" element={<Releases />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookings" element={<Booking />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
   </>
  );
};

export default App;
