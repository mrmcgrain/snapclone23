import React, { useEffect, useState } from 'react'
import './Chats.css'
import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { db, auth } from "./firebase"
// import { PostAddSharp } from '@mui/icons-material';
import Chat from "./Chat"
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import { RadioButtonUnchecked } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { resetCameraImg } from './features/cameraSlice';

function Chats() {

    const [posts, setPosts] = useState([])
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const nav = useNavigate()

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))
                )
            )
    }, [])


    const takeSnap = () => {
        dispatch(resetCameraImg())
        nav("/")
    }

    return (

        <div className='chats' >

            <div className="chats__header">

                <Avatar src={user?.profilePic}
                    onClick={() => {
                        auth.signOut()
                        nav("/")
                    }}
                    className='chats__avatar' />

                <div className="chats__search">

                    <SearchIcon className="chats__searchIcon" />

                    <input placeholder='Friends' type='text' />

                </div>

                <ChatBubbleIcon className="chats__chatIcon" />

            </div>

            <div className="chats__posts">
                {posts.map(({
                    id,
                    data: { profilePic, username, timestamp, imageUrl, read }
                }) => (

                    <Chat
                        key={id}
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                        read={read}
                        profilePic={profilePic}

                    />
                )

                )}

            </div>
            <RadioButtonUnchecked
                className='chats__takePicIcon'
                onClick={takeSnap}
                fontSize='large'
            />


        </div>
    )
}

export default Chats