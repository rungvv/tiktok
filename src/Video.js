import video2 from './videos/video2.mkv'
import { forwardRef, useImperativeHandle, useRef } from 'react'

function Video(props, ref)  {
    const videoRef = useRef()
    const videom = useRef()
    console.log(videom)
    useImperativeHandle(ref, () => ({
        play(){
            videoRef.current.play()

        },
        pause(){
            videoRef.current.pause()

        }
    }))

    
    return (
        <video
            ref={videoRef}
            src={video2} 
            controls={videom}       
         />         
    )
}

export default forwardRef(Video)