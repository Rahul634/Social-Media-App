import './profile.css'
import React from 'react'

import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { useEffect, useState } from 'react'
import axios from "axios"
function Profile() {
  const [user, setUser] = useState({})
  useEffect(()=> {
    const fetchPosts = async() => {
      const res = await axios.get(`/users?userId=${post.userId}`)
      setUser(res.data)
    }
    fetchPosts();
    
  }, [])
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
                <h4 className="profileInfoName">{user.username}</h4>
                <h4 className="profileInfoDesc">{user.desc}</h4>
            </div>
        </div>
        <div className="profileRightBottom">
      <Feed username = "Rahul"/>
      <Rightbar profile/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Profile