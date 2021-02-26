import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login} from './features/userSlice'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
    const dispatch = useDispatch()
    const Signin =()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
            displayName: user?.displayName,
            email:user?.email,
            photoURl:user?.photoURL
            }))
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img className="login__img"  src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="gmail"/>
                <Button onClick={Signin} variant="contained" color="primary">Login</Button>
            </div>
        </div>
    )
}

export default Login
