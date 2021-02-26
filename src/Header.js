import { Avatar, IconButton } from '@material-ui/core'
import { Apps, ArrowDropDown, Menu, Notifications, Search, Settings } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'
import './Header.css'

function Header() {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(selectUser);
    const signout=()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <Menu/>
                </IconButton>
                <img onClick={()=>history.push('/')} src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="logo"/>
            </div>
            <div className="header__middle">
                <IconButton>
                <Search/>
                </IconButton>
                <input type="text" placeholder=" Search mail"/>
                <IconButton>
                <ArrowDropDown/>
                </IconButton>
            </div>
            <div className="header__right">
              <IconButton>
                  <Apps/>
              </IconButton>
              <IconButton>
                  <Notifications/>
              </IconButton>
              <IconButton>
                  <Avatar onClick={signout} src={user?.photoURL}/>
              </IconButton>
            </div>
        </div>
    )
}

export default Header
