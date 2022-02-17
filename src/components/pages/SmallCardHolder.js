import React from 'react';
import SmallCard from './SmallCard';
import Prototype from '../assets/prototype.png'
import UserTesting from'../assets/user testing.png'
import UserResearch from '../assets/userresearch.png'
import VisualDesign from '../assets/visual design.png'

import './SmallCard.css'

function SmallCardHolder() {
  return <div className='smallcardholder'>
    <div className='square'></div>
  <div className='column__one'>
   <SmallCard img={UserResearch} info='User Research' cardStyle= 'cardone' cardSize='smallcard'/>
   <SmallCard img={UserTesting} info='UserTesting' cardStyle= 'cardtwo' cardSize='largecard'/>
   </div>
   
   <div className='column__two'>
   <SmallCard img={VisualDesign} info='Visual Design' cardStyle= 'cardthree' cardSize='smallcard'/>
   <SmallCard img={Prototype} info='Prototype' cardStyle= 'cardfour' cardSize='smallcard'/>
   </div>

  </div>;
}

export default SmallCardHolder;
