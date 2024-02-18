import React, { useEffect } from 'react'
import { v4 as uuid } from 'uuid'

import "./Preview.css"
import { useDispatch, useSelector } from 'react-redux'
import { resetCameraImg, selectCameraImg } from './features/cameraSlice'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create'
import NoteIcon from '@mui/icons-material/Note'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CropIcon from '@mui/icons-material/Crop'
import TimerIcon from '@mui/icons-material/Timer'
import SendIcon from '@mui/icons-material/Send'
import { db, storage } from './firebase'
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

// import { storage } from "./firebase.js"


function Preview() {
    let nav = useNavigate()
    const cameraImg = useSelector(selectCameraImg)
    const dispatch = useDispatch()


    useEffect(() => {
        if (!cameraImg) {
            nav("/", { replace: true })
        }
    }, [cameraImg, nav])

    const closePreview = () => {
        dispatch(resetCameraImg())
        nav("/", { replace: true })
    }

    const sendPost = () => {
        //to firebase and redirect to chat
        const id = uuid()

        const uploadTask = storage
            .ref(`posts/${id}`)
            .putString(cameraImg, 'data_url')

        uploadTask.on('state_changed',
            null,
            (err) => {

                console.log("errr", err)
            },
            () => {
                // on complete
                storage
                    .ref(`posts`)
                    .child(id)
                    .getDownloadURL()
                    .then((url) => {
                        db.collection('posts').add({
                            imageUrl: url,
                            username: '23',
                            read: false,
                            // profilePic,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),


                        })
                        nav("/chats", { replace: true })
                    })

            }

        )
    }




    return (
        <>

            <div className="preview">
                <CloseIcon className='preview__close' onClick={closePreview} />

                <div className="preview__toolbarRight">
                    <TextFieldsIcon />
                    <CreateIcon />
                    <NoteIcon />
                    <MusicNoteIcon />
                    <AttachFileIcon />
                    <CropIcon />
                    <TimerIcon />

                </div>


                <img src={cameraImg} alt="" />
                <div onClick={sendPost} className="preview__footer">
                    <h2>Send Now</h2>
                    <SendIcon fontSize='small' className='preview__sendIcon' />
                </div>




            </div>

        </>

    )
}

export default Preview