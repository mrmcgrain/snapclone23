import React from 'react'
import './Chat.css'
import { Avatar } from '@mui/material'
import { StopRounded } from '@mui/icons-material'
import ReactTimeago from 'react-timeago'
import { selectImg } from "./features/appSlice"
import { useDispatch } from 'react-redux'
import { db } from './firebase'
import { useNavigate } from 'react-router-dom'

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {

    const dispatch = useDispatch()
    const nav = useNavigate()

    const open = () => {
        if (!read) {
            dispatch(selectImg(imageUrl))
            db.collection('posts').doc(id).set({
                read: true,
            }, { merge: true }
            )

            nav("/chats/view")
        }
    }

    return (
        <div onClick={open} className='chat'>
            <Avatar className="chat__avatar" src={profilePic} />
            <div className="chat__info">

                <h4>{username}</h4>
                <p>
                  {!read && `Tap to view - `}{" "}
                  <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />

                </p>
            </div>

            {!read && <StopRounded className='chat__readIcon' />}
        </div>
    )
}

export default Chat