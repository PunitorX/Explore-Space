import React, { useEffect, useRef } from 'react'
import '../styles/HomePage.css'
import Video from '../videos/earth.mp4'

const HomePage = ({src, isMuted}) => {
  const refVideo = useRef(null)

  useEffect(() => {
    if(!refVideo.current) {
      return
    }

    if(isMuted) {
      //open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
      refVideo.current.defaultMuted = true
      refVideo.current.muted = true
    }

    refVideo.current.srcObject = src
  }, [src])

  return (
    <body className='homePage'>
      <div className='media'>
        <video className="mediaContainer" autoPlay ref={refVideo} muted loop>
          <source src={Video} type='video/mp4'/>
        </video>
      </div>
    </body>
  )
}

export default HomePage