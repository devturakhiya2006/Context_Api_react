import React from 'react'
import { useContext } from 'react'
import ThemeContext, { DataPost } from './ThemeContext'

const Navbar2 = (props) => {
    const data=useContext(DataPost)
    const [theme,settheme]=useContext(DataPost)

  return (
    <div className='nav2'> 
       <h4>Home </h4>
       <h4>About</h4>
       <h4>Contect</h4>
       <h4>Services</h4>
       <h4>Portfolio</h4>
       <h4>{theme}</h4>
    </div>
  )
}

export default Navbar2
