import React from 'react'
import Contenido from './Content/Contenido'
import Nav from '../Nav/Nav'
const HomePage = () => {
  return (
    <div>
      <header className="App-header">
        <Nav></Nav>
        <Contenido/>
      </header>
    </div>
  )
}

export default HomePage