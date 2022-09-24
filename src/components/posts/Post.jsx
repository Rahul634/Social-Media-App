import React from 'react'
import './post.css'
import { MoreVert } from "@material-ui/icons"
import { useState, useEffect } from 'react'
import axios from "axios"
import {format} from "timeago.js"
import { Link } from 'react-router-dom'
function Post({post}) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setisLiked] = useState(false)
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})
    const likeHandler = () => {
        setLike(isLiked?like-1:like+1);
        setisLiked(!isLiked)
    }
    useEffect(()=> {
        const fetchPosts = async() => {
          const res = await axios.get(`users/${post.userId}`)
          setUser(res.data)
        }
        fetchPosts();
        
      }, [post.userId])
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    <img src={user.profilePicture || ""} alt={post.photo} className="postProfileImg" />
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                {/* src = {PF+post.photo} */}
                <img src = "" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="" alt="" className="likeIcon" onClick={likeHandler}/>
                    <img src="" alt="" className="likeIcon" onClick={likeHandler}/>
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post