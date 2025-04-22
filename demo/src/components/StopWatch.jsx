import { Stop } from '@material-ui/icons'
import React from 'react'
import { useState,useRef } from 'react'

const StopWatch = () => {

    const [time, setTime] = useState(0)
    const timeRef = useRef(null)

    function Start (){
       timeRef.current = setInterval(() => {
            setTime(time => time+1)
        },1000)
    }

    function Restart(){
        Start()
    }

    function Stop(){
        clearInterval(timeRef.current)
        timeRef.current = null;
    }

    function Reset(){
        stop()
        setTime(0);
    }

  return (
    <div>
        <p>The time is : {time}</p>
        <button onClick={Start}>Start</button>
        <button onClick={Stop}>Stop</button>
        <button onClick={Restart}>Restart</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default StopWatch