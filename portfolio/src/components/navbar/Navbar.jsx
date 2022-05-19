import React from 'react'
import './Navbar.css'
import {FaUserGraduate} from 'react-icons/fa'
import {AiFillGift} from 'react-icons/ai'
import {ImBooks} from 'react-icons/im'
import {AiOutlineFileDone} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Navbar = ()  => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <navbar>
      <a href="#header" onClick={() => setActiveNav ('#header')} className={activeNav === '#' ? 'active' : ''}><FaUserGraduate/></a>
      <a href="#blog" onClick={() => setActiveNav ('#blog')} className={activeNav === '#' ? 'active' : ''} ><ImBooks/></a>
      <a href="#services" onClick={() => setActiveNav ('#services')} className={activeNav === '#' ? 'active' : ''}><AiFillGift/></a>
      <a href="#skills" onClick={() => setActiveNav ('#skills')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineFileDone/></a>
      <a href="#contact" onClick={() => setActiveNav ('#contact')} className={activeNav === '#' ? 'active' : ''}><AiOutlineMessage/></a>
    </navbar>
  )
}

export default Navbar