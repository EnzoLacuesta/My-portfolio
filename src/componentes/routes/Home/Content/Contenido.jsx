import React from 'react'
import Buttons from './Buttons'
import MovingImg from './MovingImg'
import { Link } from 'react-router-dom'


const Contenido = () => {
  return (
    <div className='contenido'>
        <div className='main-text'>
              <p className='text-content'>Hi there, </p>
              <p className='text-content'> I am Enzo <strong className='strong'>Lacuesta</strong></p>
              <p  className='text-content-medium'> I`m into <span>Web Developer</span></p>
              <Link className='about' to={"/about"}>About me</Link>
            
              <Buttons></Buttons>
        </div>
        <MovingImg/>
    </div>
  )
}

export default Contenido