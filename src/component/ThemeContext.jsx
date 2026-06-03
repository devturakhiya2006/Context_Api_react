import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const DataPost=createContext()
const ThemeContext = (props) => {
    const [theme, settheme] = useState('light')
  return (
    <div>
      <DataPost.Provider value={[theme,settheme]}>
        {props.children}
      </DataPost.Provider>
    </div>
  )
}
export default ThemeContext
