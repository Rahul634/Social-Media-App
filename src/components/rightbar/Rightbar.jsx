import React from 'react'
import './rightbar.css'
import {Users} from "../../dummyData"
import Online from '../online/Online'
function Rightbar({profile}) {
  const HomeRightbar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img src="" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Pola Foster</b><b>and 3 others</b> had their bday today</span>
        </div>
        <img src="" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u}/>
          ) )}
          
        </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
      <h4 className='rightbarTitle'> User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">
            City:
          </span>
          <span className="rightbarInfoValue">
            New York
          </span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">
            From:
          </span>
          <span className="rightbarInfoValue">
            India
          </span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">
            Relationship:
          </span>
          <span className="rightbarInfoValue">
            Single
          </span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="" alt="" className="rightbarFollowingImg" />
          <span className="rightFollowingName">James Bond</span>
        </div>
        <div className="rightbarFollowing">
          <img src="" alt="" className="rightbarFollowingImg" />
          <span className="rightFollowingName">James Bond</span>
        </div>
        <div className="rightbarFollowing">
          <img src="" alt="" className="rightbarFollowingImg" />
          <span className="rightFollowingName">James Bond</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar