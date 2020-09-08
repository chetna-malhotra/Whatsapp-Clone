import React,{useState} from 'react';
import '../styles/sidebar.css';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Coversations from './Coversations'
import DonutIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVerti from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import {IconButton,Avatar} from '@material-ui/core';
import Contacts from './Contacts';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';
function Sidebar({id}) {
    const [activeKey,setActiveKey]=useState(CONVERSATIONS_KEY)
    const conversationsOpen=activeKey===CONVERSATIONS_KEY

    const [modalOpen,setModalOpen]=useState(false)
    function closeModal(){
        setModalOpen(false);
    }
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar src='https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png'/>
                <div className='sidebar-header-right'>
                    <IconButton>
                        <DonutIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVerti/>
                    </IconButton>                  
                </div>
                </div>
                <div className='sidebar-search'>
                    <div className='sidebar-search-con'>
                        <SearchOutlined/>
                        <input type='text' placeholder='Search or start a new chat'/>
                    </div>
                </div>

                <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Coversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts/>
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={()=>setModalOpen(true)} className='rouned=0' style={{backgroundColor:'rgb(5, 85, 45)'}}>
            New {conversationsOpen?'Conversation':'Contact'}
        </Button>
       
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ?
          <NewConversationModal closeModal={closeModal} /> :
          <NewContactModal closeModal={closeModal} />
        }
      </Modal>
                
                
            </div>
        
    )
}

export default Sidebar
