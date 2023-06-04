import React from 'react'
import Nav from '../Nav/Nav'
import CardReact from './CardReact'
import CardNode from './CardNode'
import CardGit from './CardGit'
const About = () => {
  return (
    <div className='App-PageAbout'>
        <Nav/>
        <div className='content-about'>
            <div className='about-one'>
              <div className="content-about-one floating-2">
                <CardNode></CardNode>
              </div>
              <div className="content-about-one floating">
                <CardReact></CardReact>
              </div>
              <div className="content-about-one floating-2">
                <CardGit></CardGit>
              </div>
            </div>
            <div className='about-two'>
              <div className="content-about-two floating">
                <h1>Contenido nuevo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam repellendus, </p>
              </div>
              <div className="content-about-two floating">
              <h1>Contenido nuevo</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Expedita quisquam repellendus, 
              </p>
              </div>
            </div>
        </div>
    
    
    </div>
  )
}

export default About