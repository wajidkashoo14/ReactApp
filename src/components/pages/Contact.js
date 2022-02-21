import React from 'react'
import Button from '../Button'
import './Contact.css'

function Contact() {
  return (
    <div className='contact__container'>
        <h2>contact me</h2>
    <div className='contact'>
     <from className='form'>
       <h3>send a message</h3>
            <label htmlFor="name">Full Name </label>
            <input type="text" id='name'/>
            <label htmlFor="email">Email </label>
            <input type="email" id='email'/>
            <label htmlFor="message">Message </label>
            <textarea name="message" id="message" cols="30" rows="05"></textarea>
            <Button  type='submit' buttonSize='btn-large' buttonStyle='btn-form'>Send</Button>
        </from>
      </div>
    </div> 
  )
}

export default Contact