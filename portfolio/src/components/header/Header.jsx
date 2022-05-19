import React from 'react'
import './Header.css'
import profile from '../../assets/profilepic.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Océane Sallé</h1>
        <h5 className="text-light">Développeuse web full-stack</h5> 
        <HeaderSocials />

        <div className="profilegrid"> 
          <div className="profile">
            <img src={profile} alt="profile" />
          </div>
        
        <div className='presentation'>
        <p>
          "Parce que la réussite est la chose la plus naturelle du monde." </p>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Soluta architecto neque quo vel sint amet repellendus quos iusto, 
          nesciunt reprehenderit voluptate tempore illo voluptatem accusamus? 
          Dolorum minima placeat tenetur. Repellat.
        
        </div>
        </div>
          
      </div>
    </header>
  )
}

export default Header