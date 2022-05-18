import React from 'react'
import './Skills.css'
import {GiSkills} from 'react-icons/gi'

const Skills = () => {
  return (
   <section id="skills">
     <h5>What Skills I have </h5>
     <h2>My Experience</h2>

     <div className="container experience__container">
       <div className="experience__frontend">
       <h3>Frontend Development</h3>
       <div className="experience__content">
         <article className="experience__details">
           <GiSkills/>
         </article>
       </div>
       </div>
       <div className="experience__backend">

       </div>
     </div>
   </section>
  )
}

export default Skills