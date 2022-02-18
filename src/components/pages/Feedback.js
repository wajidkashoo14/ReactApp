import React from 'react'
import './Feedback.css'
import FeedbackCard from './FeedbackCard'
import Tweet from '../assets/Replace.png'

function Feedback() {
  return (
    <section className='feedback'>
      
        <div className='testmonials'>
        <FeedbackCard img={Tweet}/>
            <h1>hear from my happy clients</h1>
            <img src={Tweet} className= 'testmonials__img' alt='wajid'/>
            </div>  
    </section>
  )
}

export default Feedback