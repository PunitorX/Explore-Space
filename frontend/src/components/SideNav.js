import '../styles/SideNav.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import  { NavData } from '../data/SideNavData'

import iconOne from '../icons/052-menu.png'
import iconTwo from '../icons/051-close.png'

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
      <nav className={sidebar ? 'navMenuActive' : 'navMenu'}>
        <ul className='navItems'>
          <li className='navToggle'>
            <Link to='#' className='menuBars'>
              <img src={iconTwo} onClick={showSidebar} />
            </Link>
            {NavData.map((item, index) => {
              return (
               <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <img src={item.icon} alt="" />
                  <span>{item.title}</span>
                </Link>
               </li>
              )
            })}
          </li>
        </ul>
      </nav>
    </>
  )
}
