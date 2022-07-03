import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt=""/>
            <span className={s.MessageContainer}>
                        <p className={s.userName}>{props.name}</p>
                        <p className={s.messageText}>{props.message}</p>
                        <p className={s.time}>{props.time}</p>
            </span>
        </div>
    )
}

export default Message
