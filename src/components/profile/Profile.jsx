import './profile.css'
import React from 'react'

import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCovor">
            <img src="" alt="" className="profileCovorImg" />
            <img src="" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Rahul Bhave</h4>
                <h4 className="profileInfoDesc">Yo whatsuppp</h4>
            </div>
        </div>
        <div className="profileRightBottom">
      <Feed/>
      <Rightbar Profile/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Profile