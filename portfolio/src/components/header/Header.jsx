import React from 'react'
import './Header.css'
import profile from '../../assets/profilepic.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__content__titles">
        <h1>Océane Sallé</h1>
        <h5 className="text-light">Développeuse web full-stack</h5> 
        </div>
        
      <div className="header__content">
          <div className="about__me-image">
            <img src={profile} alt="profile" />
          </div>
        
        <div className='about__content'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Praesentium quas, voluptatum repellat asperiores voluptate aliquid. 
          Dignissimos omnis ipsam nostrum nesciunt quasi amet nemo, vel nam aperiam veritatis, 
          totam ullam illo. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Praesentium quas, voluptatum repellat asperiores voluptate aliquid. 
          Dignissimos omnis ipsam nostrum nesciunt quasi amet nemo, vel nam aperiam veritatis, 
          totam ullam illo. </p>
          <p> 🔴 Prise de rendez-vous à partir du 1er aout 2022.</p>
        </div>
        </div>

          
      </div>
    </header>
  )
}

export default Header