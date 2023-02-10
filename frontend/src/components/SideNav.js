import '../styles/SideNav.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import  { NavData } from '../data/SideNavData'

import iconOne from '../icons/menu.png'
import iconTwo from '../icons/close.png'

export const SideNav = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menuBars'>
          <img src={iconOne} onClick={showSidebar} />
        </Link>
      </div>

      <nav className={sidebar ? 'navMenu active' : 'navMenu'}>
        <ul className='navList' onClick={showSidebar}>
          <li className='navToggle'>
            <Link to='#' className='menuBars'>
              <img src={iconTwo} />
            </Link>
          </li>
          {NavData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <img src={item.icon} />
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
