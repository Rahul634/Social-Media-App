import React from 'react'
import './post.css'
import { MoreVert } from "@material-ui/icons"
import {Users} from "../../dummyData"
import { useState } from 'react'
function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setisLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked?like-1:like+1);
        setisLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt={post.photo} className="postProfileImg" />
                    <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src="" alt="" className="postImg" />
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