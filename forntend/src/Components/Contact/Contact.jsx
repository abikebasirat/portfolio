import React from 'react'
import "./Contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3abf0a61-ac1c-4ace-8309-00b9d77a2d2d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);

    }
  };



  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
    <div className="contact-section">
      <div className="contact-left">
        <h1>Let's talk</h1>
        <p>I'm currently avaliable to take on new project, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
        <div className="contact-details">
          <div className="contact-detail">
          <MdOutlineEmail className='icon'/><p>abikebasirat826@gmail.com</p>
            
          </div>
          <div className="contact-detail">
          <LuPhoneCall className='icon'/><p>+234-703-606-1745</p>
          </div>
          <div className="contact-detail">
          <MdLocationPin className='icon'/><p>Ota, Ogun States </p>

          </div>
        </div>
      </div>
      <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter your email' name='email' />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message here'></textarea>
        <button type='submit' className='contact-submit'>Submit now</button>
      </form>
    </div>
    </div>
  )
}

export default Contact