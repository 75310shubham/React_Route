import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
    <nav>Get ready to complete your daily goals</nav>
    {/* <div className='header'>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div> */}
      <div className='header'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/user/foot">User</Link>
    </div>

    </>
  )
}

export default Header