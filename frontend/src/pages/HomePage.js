import React, { Suspense } from 'react'
import '../styles/HomePage.css'
import ViewCard from '../components/Cards/ViewCard'

const Video = React.lazy(() => import ('../components/Video'))

export default function HomePage() {
  return (
    <>
    <body className='homeBody'>
      <div className='homeContainer'>

        {/* <Suspense fallback={<div>Loading...</div>}>
          <Video />
        </Suspense> */}
        
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
