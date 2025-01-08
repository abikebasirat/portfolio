import React from 'react'
import './Services.css';
import Services_Data from '../../assets/services_data'
import { FaArrowRightLong } from "react-icons/fa6";
function Services() {
  return (
    <div id='services'className='services'>
        <div className="services-title">
            <h1>My Services</h1>
        </div>
        <div className="services-container">
            {Services_Data.map((Service,index) =>{
              return <div key={index} className="services-format">
                <h3>{Service.s_no}</h3>
                <h2>{Service.s_name}</h2>
                <p>{Service.s_desc}</p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <FaArrowRightLong />
                </div>
              </div>  
            })}
        </div>
      
    </div>
  )
}

export default Services
