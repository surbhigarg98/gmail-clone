import { Button, IconButton } from '@material-ui/core'
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            <Button startIcon={<Add fontSize="large"/>} className="sidebar__button" onClick={()=>dispatch(openSendMessage())}>
                Compose</Button>
            <SidebarOption Icon={Inbox} title="Inbox" number={54} selected/>
            <SidebarOption Icon={Star} title="Starred" number={10}/>
            <SidebarOption Icon={AccessTime} title="Snoozed" number={3}/>
            <SidebarOption Icon={LabelImportant} title="Important" number={6}/>
            <SidebarOption Icon={NearMe} title="sent" number={67}/>
            <SidebarOption Icon={Note} title="Drafts" number={20}/>
            <SidebarOption Icon={ExpandMore} title="More" number={98}/> 
            <div className="sidebar__footer">
                <IconButton>
                    <Person/>
                </IconButton>
                <IconButton>
                    <Phone/>
                </IconButton>
                <IconButton>
                    <Duo/>
                </IconButton>
            </div>
        </div>
    )
}

export default Sidebar
