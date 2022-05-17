import React from 'react'
import './header.css'
import Button from './Button'
import profile from '../../assets/profilepic.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hajiba Bintu</h1>
        <h5 className="text-light">Fullstack Developer</h5> 
        <Button />
        <HeaderSocials />

          <div className="me">
            <img src={profile} alt="profile" />
          </div>

          <a href="#contact" clasName="scroll__down">Scroll Down</a>

          
      </div>
    </header>
  )
}

export default Header