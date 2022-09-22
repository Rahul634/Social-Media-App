import Share from "../share/Share"
import React from 'react'
import './feed.css'
import Post from "../posts/Post"
function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed