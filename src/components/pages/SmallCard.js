import React from 'react';
import './SmallCard.css'

const Styles = ['cardone', 'cardtwo', 'cardthree', 'cardfour']

const Sizes = ['smallcard', 'largecard', 'extralarge']

function SmallCard({img, info, cardStyle, cardSize}) {
    const checkStytle = Styles.includes(cardStyle) ? cardStyle : Styles[0];
    const checkSize = Sizes.includes(cardSize) ?cardSize : Sizes[0]


  return <div className={`${checkStytle} ${checkSize}`}>
      <img src={img} className='small__card__container__img' alt={info}/>
      <p className='small__card__container__info'>{info}</p>
  </div>;
}

export default SmallCard;
