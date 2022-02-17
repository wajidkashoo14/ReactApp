import React from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'
import ImageOne from '../assets/imageOne.jpg'
import ImageTwo from '../assets/imageTwo.jpg'
import ImageThree from '../assets/imageThree.jpg'
import ImageFour from '../assets/imageFour.jpg'


function Projects() {
  return (
      <div className='projects'>
          <h2>portfolio</h2>
          <h1>latest projects</h1>
    <div className='projects__container'>
        <ProjectCard img={ImageOne} title='kaaz' children='ist project'/>
        <ProjectCard img={ImageTwo} title='kaaz' children='second project'/>
        <ProjectCard img={ImageThree}title='kaaz' children='third project'/>
        <ProjectCard img={ImageFour} title='kaaz' children='fourth project'/>
    </div>
    </div>
  )
}

export default Projects