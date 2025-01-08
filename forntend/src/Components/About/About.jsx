import React from 'react'
import './About.css'
import abike from '../../assets/abike.png'
function About() {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>        
      </div>
      <div className="about-sections">
        <div className="about-left">
        <img className='abike' src={abike} alt="" />
        </div>
      <div className="about-right">
        <div className="about-para">
            <p>I am an experienced Frontend Developer with over a decode of professional expertise in the fleld.
                Throughout my career, i have had the privilage of collaborating with prestlgious organizations,
                contrinuting to their successnnand growth.   
            </p>
            <p>My passion for frontend developer is not only reflected in my extensive experience but also in the 
                enthusiasm and dedication i bring to each project
            </p>

        </div>
        <div className="about-skills">
            
        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div> 
        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>  
        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/> </div> 
        <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>  
            
        </div>
      </div>
      </div>
      <div className="about-achievements">
      <div className="about-achievement">
        <h1>2+</h1>
        <p>YEARS OF EXPRIENCE</p>
      </div>

      <hr />
      <div className="about-achievement">
        <h1>5+</h1>
        <p>PROJECT COMPLETED</p>
      </div>

      <hr />
      <div className="about-achievement">
        <h1>2+</h1>
        <p>HAPPY CLIENTS</p>
      </div>
      
      </div>
    </div>
  )
}

export default About
