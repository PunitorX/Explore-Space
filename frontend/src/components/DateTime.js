import React, { useEffect, useState } from 'react'

export default function DateTime() {
    var [date, setDate] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(() =>
            setDate(new Date()), 1000)
        
        return function cleanup() {
            clearInterval(timer)
        }
    })

    return (
        <>
            <div className='data'>
                <p>Date : {date.toLocaleDateString()}</p>
                <p>Time : {date.toLocaleTimeString()}</p>
            </div>
        </>
    )
}
