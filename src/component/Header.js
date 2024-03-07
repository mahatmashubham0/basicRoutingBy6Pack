import React from 'react'
import { Link } from 'react-router-dom'
import '../style/App.css'


const Header = () => {
  return (
    <div className='nav'>
      <h1 className='nav-logo'>
          TechStudy
      </h1>
      <div className='nav-menu'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <a href={"/#service"}>Service</a>
        <Link to={"/service"}>Corousel</Link>
      </div>
      <div className='nav-login'>
          <button>Login</button>
      </div>
    </div>
  )
}

export default Header