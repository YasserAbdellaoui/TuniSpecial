import React from "react";

// import LoginPage from './components/LoginPage/LoginPage'
import "./App.css";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Donate from "./components/Donate";
import AboutUs from "./components/AboutUs";
import News from "./components/News";
import VideoForm from "./components/VideoForm";
import Events from "./components/Events";

const App = () => {
  return (
    
    
 
    <>
    <Navbar/>
    <contact/>
    <Footer/>
    
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/" element={<Footer/>} />
      <Route exact path="/Donate" element={<Donate/>} />
      <Route exact path="/AboutUs" element={<AboutUs/>} />
      <Route exact path="/News" element={<News/>} />
      <Route exact path="/video" element={<VideoForm/>} />
      <Route exact path="/event" element={<Events/>} />

      
    </Routes></>
  );
};

export default App;
