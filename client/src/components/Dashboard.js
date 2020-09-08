import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {useConversations} from '../context/ConversationsProvider'

function Dashboard({id}) {
    const {selectedConversation} =useConversations()
    return (
    <div className="app">
    <div className='app-body'>
    <Sidebar id={id}/>
    {selectedConversation && <Chat/>}
    </div>
    </div>
    )
}

export default Dashboard
