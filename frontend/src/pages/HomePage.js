import React from 'react'
import '../styles/HomePage.css'

import Video from '../components/Video'
import ViewCard from '../components/Cards/ViewCard'

export default function HomePage() {
  return (
    <>
    <body className='homeBody'>
      <div className='homeContainer'>

        <Video />
        
        <div className='homeHeader'>
          <h1>
            Travel beyond our planet and into the stars.
          </h1>
        </div>

        <div className='homeCards'>
          <ViewCard />
        </div>

        <div className='homeTimeline'>
          Timeline
        </div>

      </div>
    </body>
      
    </>
  )
}
