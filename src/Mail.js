import { IconButton } from '@material-ui/core'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectOpenMail } from './features/mailSlice'
import './Mail.css'

function Mail() {
    const history = useHistory()
    const selectedMail = useSelector(selectOpenMail)
    return (
        <div className="mail">
            <div className="mailTools">
               <div className="mailTools__left">
               <IconButton onClick={()=>history.push('/')}>
                    <ArrowBack/>
                </IconButton>
                <IconButton>
                    <MoveToInbox/>
                </IconButton>
                <IconButton>
                    <Error/>
                </IconButton>
                <IconButton>
                    <Delete/>
                </IconButton>
                <IconButton>
                    <Email/>
                </IconButton>
                <IconButton>
                    <WatchLater/>
                </IconButton>
                <IconButton>
                    <CheckCircle/>
                </IconButton>
                <IconButton>
                    <LabelImportant/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
               </div>
               <div className="mailTools__right">
                   <IconButton>
                       <UnfoldMore/>
                   </IconButton>
                   <IconButton>
                       <Print/>
                   </IconButton>
                   <IconButton>
                       <ExitToApp/>
                   </IconButton>
               </div>
            </div>
            <div className="mail__body">
                <div className="mailBody__header">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant className="mail__important"/>
                    <p>{selectedMail?.title}</p>
                    <p className="mailTime">{selectedMail?.time}</p>
                </div>
                <div className="mailBody__message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
