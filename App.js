import React from "react";
import Header from "./Component/Header";
import Home from "./Component/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import User from "./Component/User";

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Home />
    //   <Contact/>
    //   <About/>
    // </BrowserRouter>

    // // // 
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    //   <Footer/>
    // </BrowserRouter>

    // // // user/fjjbb
    // // user/kfkf
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/user/:id" element={<User />} />
    //     <Route path="/user/:id" element={<About />} />
    //     <Route path="/user/:hid" element={<Contact />} />
     
    //   </Routes>
    //   <Footer/>
    // </BrowserRouter>

        // // 
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/user/:hid" element={<Contact />} />
          <Route path="/user/:lid" element={<About />} />
       
        </Routes>
        <Footer/>
      </BrowserRouter>

  );
}

export default App;
