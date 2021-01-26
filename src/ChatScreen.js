import React from 'react';
import { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
    const [messages, setMessages]= useState([
        {
            name: "ELON",
            image: "...",
            message: "Hi",
        }
    ])
    return (
        <div className= "chatScreen">
            <p>YOU MATCHED WITH ELON ON 12/12/12</p>
            {messages.map(message => (
                <div className="chatScreenMessage"> 
                <Avatar
                className="chatScreenAvatar"
                src="{message.image}"
                />
                    <p className ="chatScreenText">{message.message}</p>
                </div>
            ))}
        </div>
    )
}

export default ChatScreen
