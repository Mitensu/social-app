import React from 'react';

function Post(props) {

    return (
        <div className="post">
            <img className="pfp" src={props.post.user.avatar_url}></img>
            <h3 className="username">{props.post.user.username}</h3>
            <time className="date">{props.post.created_at.substring(0, 10)}</time>
            <p>{props.post.content}</p>
            <span>{props.post.likes.length}</span>
        </div>
    )
}

export default Post;