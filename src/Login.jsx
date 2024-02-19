import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
// const snaplogo = require("./snaplogo.png")
import { auth, provider } from "./firebase"
import { login } from "./features/appSlice"

function Login() {
    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log("res", result)
                dispatch(
                    login({
                        username: result.additionalUserInfo.profile.name,
                        profilePic: result.user.photoURL,
                        id: result.user.uid
                    }))
            })
            .catch(err => alert(err.message))


    }



    return (

        <div className='login'>
            <div className="login__container">
                <img src={require('./snaplogo.png')} alt="" />
                <Button
                    variant='outlined'
                    onClick={signIn}
                >
                    Sign in

                </Button>
            </div>



        </div>
    )
}

export default Login