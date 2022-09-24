import Share from "../share/Share"
import React from 'react'
import './feed.css'
import Post from "../posts/Post"
import { useEffect, useState } from "react"
import axios from "axios"
function Feed({username}) {
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    const fetchPosts = async() => {
      const res = username ? await axios.get("http://localhost:8800/api/posts/profile/"+username) : await axios.get("http://localhost:8800/api/posts/timeline/632da7b360854d294facbeb2")
      setPosts(res.data)
    }
    fetchPosts();
    
  }, [])
  return (
    <div className='feed'>
     
      <div className="feedWrapper">
        <Share/>
        {posts.map((p) => (
          
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed