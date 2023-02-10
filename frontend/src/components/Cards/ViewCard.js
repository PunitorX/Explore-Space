import React from 'react'
import '../../styles/Button Styles/ViewCard.css'
import { ViewData } from '../../data/ViewCardData'

export default function ViewCard() {
  return (
    <>
        {ViewData.map((topic, index) => (
            <div key={index} className='card'>
                <div className='cardImage'>
                    <img src={topic.img} />
                </div>
                <div className='cardContainer'>
                    <h3 className='topicName'>
                        {topic.topic}
                    </h3>
                    <p className='topicDesc'>
                        {topic.desc}
                    </p>
                </div>
            </div>
        ))}
    </>
  )
}
