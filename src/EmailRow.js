import React from 'react'
import {Checkbox, IconButton} from'@material-ui/core'
import { LabelImportantOutlined, StarOutline } from '@material-ui/icons'
import './EmailRow.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {selectMail} from './features/mailSlice'

function EmailRow({id,title,subject,description,time}) {
  const history = useHistory()
  const dispatch = useDispatch();

  const openMail = () =>{
    dispatch(selectMail({
      id,title,subject,description,time
    }))
    history.push('/mail')
  }
    return (
        <div onClick={openMail} className='emailRow'>
            <div className="emailRow__options">
              <Checkbox/>
              <IconButton>
                  <StarOutline/>
              </IconButton>
              <IconButton>
                  <LabelImportantOutlined/>
              </IconButton>
            </div>
            <div className="emailRow__title">
              <h3>{title}</h3>
            </div>
            <div className="emailRow__messages">
              <h4>{subject}{" "}
              <span className="emailRow__description">- {description}</span></h4>
            </div>
            <div className="email__time">
                {time}
            </div>
        </div>
    )
}                                                                                                                                                                                                                                                                                               

export default EmailRow
                                                                                                                                                                                                                                                                                                                                