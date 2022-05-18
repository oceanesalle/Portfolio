import React from 'react'
import './Header.css'
import Button from './Button'
import profile from '../../assets/profilepic.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hajiba Bintu</h1>
        <h5 className="text-light">Fullstack Developer</h5> 
        <Button />
        <HeaderSocials />

          <div className="profile">
            <img src={profile} alt="profile" />
          </div>
        
        <div className='presentation'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Soluta architecto neque quo vel sint amet repellendus quos iusto, 
          nesciunt reprehenderit voluptate tempore illo voluptatem accusamus? 
          Dolorum minima placeat tenetur. Repellat.
        </p>
        </div>
          
      </div>
    </header>
  )
}

export default Header