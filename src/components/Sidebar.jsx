import React from "react"
import './Sidebar.css'
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons"
import { Avatar, IconButton } from "@material-ui/core"
import SideBarChat from './SidebarChat'

const Sidebar = () =>{
    return (
      <div className="sidebar">
        <div className="sidebar_header">
          <Avatar src="https://icons.iconarchive.com/icons/hopstarter/bioman/256/Bioman-Avatar-1-Red-icon.png" />
          <div className="sidebar_headerRight">
            <IconButton>
              <DonutLarge />
            </IconButton>
            <IconButton>
              <Chat />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="sidebar_search">
          <div className="sidebar_searchContainer">
            <SearchOutlined />
            <input placeholder="Search or start new chat" type="text" />
          </div>
        </div>
        <div className="sidebar_chats">
          <SideBarChat/>
          <SideBarChat/>
          <SideBarChat/>
        </div>
      </div>
    );
}

export default Sidebar