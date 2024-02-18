import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'

function Login() {


    const signIn = () => {

    }

    return (

        <div className='login'>

            <div className="login__container">
                <img src='' alt="" />
                <Button
                    variant='outline'
                    onClick={signIn}
                >
                    Sign in

                </Button>
            </div>



        </div>
    )
}

export default Login