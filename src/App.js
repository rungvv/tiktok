import Video from './Video';
import {  useRef, useState, useEffect } from 'react'
import './App.css'
import Button from './component/Button'
import Buttonn from './component/Buttonn'
import { Routes, Route, Link  } from 'react-router-dom';

function App() {
  
  const videoRef1 = useRef()
  const [playing, setPlay] = useState(false)

  useEffect(()=>{
    console.log(videoRef1.current)
    
    
    if (playing)
   {videoRef1.current.play()}

  })
  
  const handlePlay = () => {
    if(!playing)
    {videoRef1.current.play()
      setPlay(true)
    }
    else
    {videoRef1.current.pause()
      setPlay(false)
    }
  }
  const handlePause = () => {
    videoRef1.current.pause()
    setPlay(false)
  }
  
  return (
    <div  style={{padding : '  150px '}}>

        <ul>
          <li>
            <Link to="/">HOme</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
        <Routes>
            <Route path="/" element={<Button />} />
            <Route path="/news" element={<Buttonn />} />
        </Routes>
       <Video ref={videoRef1} />
        <button className="header" onClick={handlePlay}>
            { playing === false ?  "fa-thin fa-play" : "fa-thin fa-pause"} 
        </button>
        <button onClick={handlePause}>Pause</button>
    </div>
  )
}

export default App;
