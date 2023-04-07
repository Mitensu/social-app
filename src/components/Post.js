import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
    const [likeCount, setLikeCount] = useState(props.post.likes.length)
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [doesUserLiked, setDoesUserLiked] = useState(props.post.likes.filter(like => like.username === props.user?.username).length !== 0);

    const deletePost = (id) => {
        axios.post('https://akademia108.pl/api/social-app/post/delete', {
            post_id: id,
        })
            .then(res => {
                console.log(res.data);
                props.setPosts((posts) => {
                    return posts.filter((post) => post.id !== res.data.post_id);
                });
            })
            .catch(err => {
                console.error(err);
            })
    };

    const likePost = (id, isLiked) => {
        axios.post('https://akademia108.pl/api/social-app/post/' + (isLiked ? 'dislike' : 'like'), {
            post_id: id
        })
            .then(() => {
                setLikeCount(likeCount + (isLiked ? -1 : 1));
                setDoesUserLiked(!isLiked)
            })
    }

    const likesButtonClass = doesUserLiked ? 'dislike' : 'like';

    return (
        <div className="post">
            <img className="pfp" src={props.post.user.avatar_url}></img>
            <h3 className="username">{props.post.user.username}</h3>
            <time className="date">{props.post.created_at.substring(0, 10)}</time>
            <p>{props.post.content}</p>
            <div className='likes'>
                {props.user && <button className={likesButtonClass} onClick={() => likePost(props.post.id, doesUserLiked)}>{doesUserLiked ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowUp} />}</button>}
                <span className='likeCount'>{likeCount}</span>
            </div>
            {props.user?.username === props.post.user.username && <a href='/' className='close' onClick={(e) => {
                e.preventDefault();
                setDeleteModalVisible(true);
            }}>X</a>}
            {deleteModalVisible && <div className='deleteConfirmation'>
                <h3>Are you sure you want to delete this post?</h3>
                <button className='yes ' onClick={() => deletePost(props.post.id)}>Yes</button>
                <button className='no' onClick={() => setDeleteModalVisible(false)}>No</button>
            </div>}
        </div>
    )
}

export default Post;