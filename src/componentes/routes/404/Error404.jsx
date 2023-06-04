import React from 'react'
import Nav from '../Nav/Nav'

const Error404 = () => {
  return (<div>
              <Nav></Nav>
              <div style={{
                      'background-color':'#0d4c77',
                      'height':'90vh',
                      'display':'grid',
                      'align-items':'center',
                      'justify-content':'center'
                      }}>
                      <img 
                        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" 
                        alt="" 
                        style={{'box-shadow':'0 0 20px hsl(287, 42%, 63%)'}} />
              </div>
         </div>
   
  )
}

export default Error404