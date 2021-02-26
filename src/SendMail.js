    import { Button } from '@material-ui/core'
    import { Close } from '@material-ui/icons'
    import React from 'react'
    import './SendMail.css'
    import {useForm} from 'react-hook-form';
    import firebase from 'firebase'
    import { useDispatch } from 'react-redux';
    import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';

    function SendMail() {
        const dispatch = useDispatch()
        const {register,handleSubmit,watch,errors} = useForm();
        const onSubmit = (formData)=>{
        db.collection('emails').add({
            to:formData.to,
            subject:formData.subject,
            message:formData.message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        dispatch(closeSendMessage())
        }
        return (
            <div className="sendMail">
                <div className="sendMail__header">
                    <h3>New Message</h3>
                    <Close className="sendMail__icon" onClick={()=>dispatch(closeSendMessage())}/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" name="to" placeholder="To"  ref={register({required:true})}/>
                    {errors.to && <p className="sendMail__errors">To is required</p>}
                    <input name="subject" placeholder="Subject" type='text' ref={register({required:true})}/>
                    {errors.ssubject && <p className="sendMail__errors">Subject is required</p>}
                    <input name="message" type='text' className="sendMail__message" ref={register({required:true})}/>
                    {errors.message && <p className="sendMail__errors">Message is required</p>}
                    <div className="sendMail__options">
                        <Button type="submit" variant="contained">Send</Button>
                    </div>
                </form>

            </div>
        )
    }

    export default SendMail
