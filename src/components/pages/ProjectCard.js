import React from 'react'
import Button from '../Button'
import './Projects.css'

function ProjectCard({img, title,children}) {
  return (
    <div className='project__card'>
        <img src={img} alt={title} />
    <div className='project__card__info'>
          <h4>{title}</h4>
          <Button buttonStyle='btn-card'>{children}</Button>
          </div>
    </div>
  )
}

export default ProjectCard