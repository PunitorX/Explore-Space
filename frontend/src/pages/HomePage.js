import React, { Suspense } from 'react'
import '../styles/HomePage.css'
import ViewCard from '../components/Cards/ViewCard'
import DateTime from '../components/DateTime'

const Video = React.lazy(() => import ('../components/Video'))

export default function HomePage() {
  return (
    <>
    <body className='homeBody'>
      <div className='homeContainer'>

        <Suspense fallback={<div>Loading...</div>}>
          <Video />
        </Suspense>
        
        <section className='sectionHeader'>
          <h1>
            Travel beyond our planet and into the stars
          </h1>
          <DateTime />
        </section>

        <section className='sectionCards'>
          <h2>Explore these categories</h2>
          <div className='cardsFlex'>
            <ViewCard />
          </div>
        </section>

        <section className='sectionTimeline'>
          <h2>Timeline</h2>
        </section>

      </div>
    </body>
      
    </>
  )
}
