import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <div className='navBar'>
      <div className="inner-container">
        <Link to="/home" className='item'>home</Link>
        <Link to="/companies" className='item'>companies</Link>
      </div>
    </div>
  )
}
