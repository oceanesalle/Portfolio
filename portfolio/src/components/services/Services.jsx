import React from 'react'
import './Services.css'
import {BsCheck2All} from 'react-icons/bs'

const Services = () => {
  return (
    <section id ='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          
          <ul className="service__list">
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>UI/UX design </h3>
          </div>
          
          <ul className="service__list">
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services