import '../styles/SideNav.css'
import '../variables/Variables.css'
import '../variables/MediaQueries.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavData } from '../data/SideNavData'
import iconOne from '../icons/052-menu.png'
import iconTwo from '../icons/051-close.png'

const SideNav = () => {
  const [sideBar, setSideBar] = useState(false)

  const showSideBar = () => setSideBar(!sideBar)

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menuBars'>
          <img src={iconOne} onClick={showSideBar} />
        </Link>
      </div>
      {/* <nav className={sideBar ? 'navMenu active' : 'navMenu'}>
        <ul className='navList' onClick={showSideBar}>
          <li className='navbarToggle'>
            <Link to='#' className='menuBars'>
              <img src={iconTwo} alt="" />
            </Link>
          </li>
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
        </ul>
      </nav> */}
    </>
  )
}

export default SideNav
