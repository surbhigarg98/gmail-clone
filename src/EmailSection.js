import React from 'react'
import './EmailSection.css'

function EmailSection({Icon,text,color,selected}) {
    return (
        <div className={`emailSection ${selected && "emailSection__active"}`}
        style={{
            borderBottom: `3px solid ${color}`,
            color:`${selected && color}`
        }}>
            <Icon/>
            <h4>{text}</h4>
        </div>
    )
}

export default EmailSection
