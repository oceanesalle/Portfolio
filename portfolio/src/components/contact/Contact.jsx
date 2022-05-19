import React from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id ='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail/>
            <h4>Email</h4>
            <h5>oceanesapro@gmail.com</h5>
             <a href="mailto:oceansapro@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
            <BsInstagram/>
            <h4>Instagram</h4>
            <h5>oceansle</h5>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
            <FaWhatsappSquare/>
            <h4>Whatapp</h4>
            <h5>+33766724540</h5>
             <a href="https://api.whatsapp.com/send?phone=+33766724540" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
            <AiOutlineLinkedin/>
            <h4>Linkedin</h4>
            <h5>Océane Sallé </h5>
             <a href="https://www.linkedin.com/oceanesalle/" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact