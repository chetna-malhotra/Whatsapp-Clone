import React from 'react'
import '../styles/sidebarchat.css';
import {Avatar} from '@material-ui/core';

function SidebarChat({key,name}) {
    return (

        <div className='sidebar-chat'>
            <Avatar/>            
            <div className='sidebar-chat-content'>
                <h1>{name}</h1>
                <p>Click to view conversation</p>
            </div>
        </div>
    )
}

export default SidebarChat
