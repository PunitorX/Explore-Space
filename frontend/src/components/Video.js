import React, { useEffect, useRef } from 'react'
import VideoI from '../videos/earth.mp4'
import VideoII from '../videos/system.mp4'
import VideoIII from '../videos/farOut.mp4'
import VideoIV from '../videos/stars.mp4'
import '../styles/Video.css'

export default function Video({src, isMuted}) {
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
    <div className='media'>
      <div className='video'>
        <video className="videoContainer" autoPlay ref={refVideo} muted loop>
          <source src={VideoIV} type='video/mp4'/>
        </video>
      </div>
    </div>
  )
}
