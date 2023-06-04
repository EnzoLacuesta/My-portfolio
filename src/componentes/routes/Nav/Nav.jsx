import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
                <div className='div-enzo'>
                  <strong>enzo</strong>lacuesta
                </div>             

                <div className='div-menu'>
                  <div>
                    <ul>
                      <li><Link className='a-menu' to={"/"}>Home</Link></li>
                      <li><Link className='a-menu' to={"/about"}>About <span id='span'>me</span></Link></li>
                      <li><Link className='a-menu' to={"/portfolio"}>Portfolio</Link></li>
                    </ul>
                  </div>

                </div>
            
    </nav>
  )
}

export default Nav