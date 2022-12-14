import {Chat, Notifications, Person, Search} from "@material-ui/icons"
import React from 'react'
import './topbar.css'
import {Link} from "react-router-dom"
function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <Link to ="/" style={{textDecoration:"none"}}>
          <span className='logo' >RahulSocial</span>
          </Link>
        </div>
        <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder = "Search for friend, post oe video" className="searchInput" />
        </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="" alt="pic here" className="topbarImg" />
        </div>
    </div>
  )
}

export default Topbar