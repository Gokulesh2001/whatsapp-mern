import { Avatar } from '@material-ui/core';
import React from 'react';
import Sidebar from "./Sidebar";
import "./SidebarChat.css";

function SidebarChat(){
    return <div className="sidebarChat">
        <Avatar/>
        <div className="sidebarChat__info">
        <h1>Room name</h1>
        <p>This is the last message</p>
    </div>
    </div>;
}

export default SidebarChat;