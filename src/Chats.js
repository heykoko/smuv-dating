import React from 'react'
import "./Chats.css"
import Chat from "./Chat"

function Chats() {
    return (
        <div className= "chats">
            <Chat 
            name ="Dav"
            message= "Wanna b my new years resolution? ;)"
            timestamp= "3 mins ago"
            profilePic= ""
            />
        </div>
    )
}

export default Chats
