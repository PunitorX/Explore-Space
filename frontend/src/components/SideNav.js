import '../styles/SideNav.sass'
import '../variables/Variables.sass'
import '../variables/MediaQueries.sass'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavData } from '../data/SideNavData'

const SideNav = () => {
  const [sideBar, setSideBar] = useState(false)

  const showSideBar = () => setSideBar(!sideBar)

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menuBars'>
          <img src="" alt="" />
        </Link>
      </div>
      <nav className={sideBar ? '' : 'menuBars'}>
        <ul>
          <li>
            <Link>
              <img src="" alt="" />
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
      </nav>
    </>
  )
}

export default SideNav
