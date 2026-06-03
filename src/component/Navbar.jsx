import React from 'react'
import Navbar2 from './Navbar2'
import { useContext } from 'react'
import { DataPost } from './ThemeContext'

const Navbar = (props) => {
    //const data=useContext(DataPost)
    
  return (
    <div className='nav'>
        <h2>Navbar</h2>
        <Navbar2 />
    </div>
  )
}

export default Navbar
