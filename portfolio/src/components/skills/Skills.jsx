import React from 'react'
import './Skills.css'
import {GrValidate} from 'react-icons/gr'

const Skills = () => {
  return (
   <section id="skills">
     
     <h5>Mes spécialitées en développement web</h5>
     <h2>Mes compétences</h2>
     

     <div className="container skills__container">
       <div className="skills__frontend">
       <h3>Frontend Development</h3>
       <div className="skills__content">
         <article className="skills__details">
           <GrValidate className='skills__details-icon'/>
           <div>
           <h4>Javascript</h4>
            <small className='text-light'>Experiencied</small> 
           </div>
         </article>
         <article className="skills__details">
           <GrValidate className='skills__details-icon'/>
           <div>
           <h4>React</h4> 
           <small className='text-light'>Experiencied</small> 
           </div>
         </article>
         <article className="skills__details">
           <GrValidate className='skills__details-icon'/>
           <div>
           <h4>CSS</h4>
           <small className='text-light'>Experiencied</small> 
           </div>
         </article>
         <article className="skills__details">
           <GrValidate className='skills__details-icon'/>
           <div>
           <h4>HTML </h4>
           <small className='text-light'>Experiencied</small> 
           </div>
         </article>
       </div>
       </div>
       
       <div className="skills__backend">
       <h3>Backend Development</h3>
       <div className="skills__content">
         <article className="skills__details">
           <GrValidate className='skills__details-icon'/>
           <div>
           <h4>Nodejs</h4>
           <small className='text-light'>Experiencied</small> 
           </div>
         </article>
         <article className="skills__details">
           <GrValidate className='skills__details-icon'/>
           <div>
           <h4>Expressjs</h4>
           <small className='text-light'>Experiencied</small> 
           </div>
         </article>
         <article className="skills__details">
           <GrValidate className='skills__details-icon'/>
           <div>
           <h4>PHP</h4>
           <small className='text-light'>Experiencied</small> 
           </div>
         </article>
       </div>
       </div>

       <div className="skills__backend">
       <h3>DESIGN</h3>
       <div className="skills__content">
         <article className="skills__details">
           <GrValidate className='skills__details-icon'/>
           <div>
           <h4>Photoshop</h4>
           <small className='text-light'>Experiencied</small> 
           </div>
         </article>
         <article className="skills__details">
           <GrValidate className='skills__details-icon'/>
           <div>
           <h4>Tailwind</h4>
           <small className='text-light'>Experiencied</small> 
           </div>
         </article>
         <article className="skills__details">
           <GrValidate className='skills__details-icon'/>
           <div>
           <h4>Figma</h4>
           <small className='text-light'>Experiencied</small> 
           </div>
         </article>
       </div>
       </div>

     </div>
   </section>
  )
}

export default Skills