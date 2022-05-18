import React from 'react'
import './Navbar.css'
import {FaUserGraduate} from 'react-icons/fa'
import {AiFillGift} from 'react-icons/ai'
import {ImBooks} from 'react-icons/im'
import {AiOutlineFileDone} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'

const Navbar = ()  => {
  return (
    <navbar>
      <a href="#home"><FaUserGraduate/>profile</a>
      <a href="#blog"><ImBooks/>blog</a>
      <a href="#services"><AiFillGift/>services</a>
      <a href="#portfolio"><AiOutlineFileDone/>portfolio</a>
      <a href="#contact"><AiOutlineMessage/>contact</a>
    </navbar>
  )
}

export default Navbar