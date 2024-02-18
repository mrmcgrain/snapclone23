import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { useDispatch } from 'react-redux'
import { setCameraImg } from './cameraSlice'

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
// import { setCameraImg } from './cameraSlice';


const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user'
}


export default function WebcamCapture() {

    const webcamRef = useRef(null)
    const dispatch = useDispatch()

    // const [image, setImage] = useState(null)

    // save snapshot of function return so if it is called again it will not run unless snapshot different
    // since it saves the output, if it get called again it will use the save and not have to run again  (43)
    // will only rerun the function if the depenacy [] changes... the webcamRef

    const capture = useCallback(() => {

        const imgSrc = webcamRef.current.getScreenshot()

        dispatch(setCameraImg(imgSrc))

        console.log("img", imgSrc)
        // setImage(imgSrc)

    }, [webcamRef])

    return (
        <div className='webcamCapture'>
            {/* {console.log("img state", image)} */}
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                width={videoConstraints.width}
                videoConstraints={videoConstraints}


            />


            <RadioButtonUncheckedIcon
                className='webcamCapture'
                onClick={capture}
            />

            {/* <img src={image}></img> */}
        </div>
    )
}

// export default WebcamCapture