import React,{useState} from 'react'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import {cards} from './Data'
import './Feedback.css'


function FeedbackCard() {
  const[currCard, setCurrCard] = useState(0)
  
return (
    <div className="FeedbackCard">
      <div className="client__detail">
              <figure className="client__detail__img">
                <img src={cards[currCard].image} alt='' />
              </figure>
              <div className="client__detail__info">
                <h3>{cards[currCard].name}</h3>
                <p>{cards[currCard].email}</p>
              </div>
            </div>
            <p className="feedback__detail">{cards[currCard].quote}</p>

            <button className="prev" >
              <FiChevronLeft onClick={() => { currCard > 0 &&  
                setCurrCard(currCard-1)}} />
            </button>

            <button className="next">
              <FiChevronRight onClick={()=> { currCard < cards.length -1 && setCurrCard(currCard+1)}} />
            </button>
        </div>
  );
}

export default FeedbackCard