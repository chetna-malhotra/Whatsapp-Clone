import React,{useState,useRef,useEffect} from 'react';
import '../styles/chat.css';
import { Avatar } from '@material-ui/core';
import Search from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVerti from '@material-ui/icons/MoreVert';
import Smiley from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { InputGroup, Form} from 'react-bootstrap';
import { useConversations} from '../context/ConversationsProvider';

function Chat() {
    const lastMessageRef=useRef()
const {sendMessage,selectedConversation} =useConversations()
const { conversations, selectConversationIndex } = useConversations()
    const [text,setText]=useState('');
    function handleSubmit(e){
        e.preventDefault();
        sendMessage(
            selectedConversation.recipients.map(r=>r.id),
            text
        )
        setText('')
    }
    useEffect(()=>{
        if(lastMessageRef.current){
        lastMessageRef.current.scrollIntoView({smooth:true})
        }

    })
    return (
        <div className='chat'>
            <div className='chat-header'>
            <Avatar/>
            {selectedConversation.messages.map((message, index) => {
                return(
                    <div className='chat-header-content'>
                <h1>{message.fromMe ? '' : message.senderName}</h1>
               
                    </div>
                 )})  
                 
                }
            </div>
            <div className='chat-header-right'>
            <Search/>
            <AttachFile/>
            <MoreVerti/>
            </div>
            <div className='chat-body'>
            {selectedConversation.messages.map((message, index) => {
                const lastMessage=selectedConversation.messages.length-1===index
                return (
                    <p ref={lastMessage? lastMessageRef:null}
                     key={index}
                    className={` ${message.fromMe ? 'chat-receiver' : 
                    'chat-msg'}`}> 
    
                    <span className='chat-name'>{message.fromMe ? 'You' : message.senderName}
                    </span>
                    {message.text}
                    <span className='chat-timestamp'>
                    {new Date().toISOString()}
                    </span>
                </p>

                )})}
               
            </div>
            
            <div className='chat-type'>
            <Smiley/>
            <Form onSubmit={handleSubmit}>
                <InputGroup class='input' style=
                {{alignItems:'center'}}>
                <input  
                value={text}
                placeholder='Type a message' type='text' 
                onChange={(e)=>setText(e.target.value)} 
                style={{height:'35px'}} />
                
                </InputGroup>
                <InputGroup.Append>
                <button type='submit'>
                    Send
                </button>
                </InputGroup.Append>
               
            </Form>
            <MicIcon/>
            </div>
        </div>
    )
}

export default Chat;
