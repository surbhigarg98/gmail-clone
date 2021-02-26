import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft,ChevronRight, MoreVert,KeyboardHide,Settings, Redo, Inbox, People, LocalOffer } from '@material-ui/icons'
import './EmailList.css'
import React from 'react'
import EmailSection from './EmailSection'
import EmailRow from './EmailRow'
import { useHistory } from 'react-router-dom'
import {useState,useEffect} from 'react'
import {db} from './firebase'

function EmailList() {
   
    const [emails,setEmails] = useState([])

    useEffect(()=>{
    db.collection('emails').orderBy('timestamp','desc').onSnapshot((snapshot)=>setEmails(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data(),
    }))))
    },[])
    return (
        <div  className="emailList">
            <div className="emailList__settings">
                <div className="emailListSettings__left">
                  <Checkbox/>
                  <IconButton>
                    <ArrowDropDown/>
                  </IconButton>   
                  <IconButton>
                      <Redo/>
                  </IconButton>
                  <IconButton>
                      <MoreVert/>
                  </IconButton>
                </div>
                <div className="emailListSettings__right">
                    <IconButton>
                        <ChevronLeft/>
                    </IconButton>
                    <IconButton>
                        <ChevronRight/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHide/>
                    </IconButton>
                    <IconButton>
                        <Settings/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <EmailSection Icon={Inbox} text="Primary" color="#DA3D26" selected/>
                <EmailSection Icon={People} text="Social" color="#1873E8"/>
                <EmailSection Icon={LocalOffer} text="Promotions" color="green"/>
            </div>
            <div className="emailList__row">
                {emails.map(({id,data})=>(
                    <EmailRow 
                    id={id}
                    key={id}
                    title={data.to}
                    subject={data.subject}
                    description={data.message}
                    time={new Date(data.timestamp?.seconds * 1000).toUTCString()}/>
                ))}
                   </div>
        </div>
    )
}

export default EmailList
