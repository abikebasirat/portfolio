import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import { FaArrowRightLong } from "react-icons/fa6";

function MyWork() {
  return (
    <div  id='work' className='mywork'>
      <div className="mywork-title">
      <h1>My latest work</h1>
      
    </div>
      <div className="mywork-container">
        {mywork_data.map((work,index) => {
          return <img key={index} src={work.w_img} alt=""/>
        })}
        <div className="mywork-showmore">
          <p>Show More</p>
          <FaArrowRightLong />

        </div>
    </div>
    </div>

  )
}

export default MyWork