import React from 'react'
import { Link } from 'react-router-dom'
const Buttons = () => {
  return (
    <div className='buttons'>
        <Link className="div-button"><ion-icon name="logo-github"></ion-icon></Link>
        <Link className="div-button"><ion-icon name="mail-unread-outline"></ion-icon></Link>
        <Link className="div-button"><ion-icon name="logo-instagram"></ion-icon></Link>        
        <Link className="div-button"><ion-icon name="logo-linkedin"></ion-icon></Link>
  </div>
  )
}

export default Buttons