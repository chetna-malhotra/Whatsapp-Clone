import React from "react";
import SidebarChat from "./SidebarChat";
import "../styles/sidebar.css";
import '../styles/sidebarchat.css';
import { useConversations } from "../context/ConversationsProvider";
import {ListGroup} from 'react-bootstrap';
function Coversations({ id }) {
  const { conversations, selectConversationIndex } = useConversations();
  return (
      <ListGroup variant="flush" className="sidebar-chats">
        {conversations.map((conversation, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => selectConversationIndex(index)}
            active={conversation.selected}
            >              
            <SidebarChat name={conversation.recipients.map(r => r.name).join(',')} key={index}/>
          </ListGroup.Item>
        ))}
      </ListGroup>
  );
}

export default Coversations;
