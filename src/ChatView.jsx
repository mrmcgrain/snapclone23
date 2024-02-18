import React, { useEffect } from 'react'
import './ChatView.css'

import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { selectSelectedImg } from './features/appSlice'
import { useNavigate } from 'react-router-dom'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function ChatView() {

    const selectedImg = useSelector(selectSelectedImg)
    const nav = useNavigate()


    useEffect(() => {
        if (!selectedImg) {
            exit()
        }
    }, [selectedImg])

    const exit = () => {
        nav("/chats", { replace: true })
    }

    return (

        <div className='chatView'>


            <img src={selectedImg} alt="" onClick={exit} />

            <div className="chatView__timer">
                <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    strokeWidth={6}
                    size={50}
                    colorsTime={[10, 5, 2, 0]}
                    colors={[
                        "#004777",
                        '#f7b801',
                        '#a30000',
                        '#a30000',
                    ]}
                >
                    {({ remainingTime }) => {
                        if (remainingTime === 0) {
                            exit()
                        }
                        return remainingTime;
                    }
                    }
                </CountdownCircleTimer>

            </div>
        </div>
    )
}

export default ChatView