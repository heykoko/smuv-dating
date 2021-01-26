import React from 'react'
import "./Chat.css"
import Avatar from "@material-ui/core/Avatar"

function Chat( {name, message, profilePic, timestamp} ) {
    return (
        <div className="chat">
            <Avatar className ="chatImage" src={profilePic} />
            <div className="chatDetails">
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className="chatTimestamp">{timestamp}</p>
        </div>
    )
}

export default Chat
