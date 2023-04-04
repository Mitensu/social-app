import React, { useState, useRef } from "react";
import axios from "axios";
import "./AddPost.css";

const AddPost = (props) => {

    const [postContent, setPostContent] = useState({});
    const postText = useRef(null);


    const addPost = (e) => {
        e.preventDefault();
        if(!postContent) {
            return;
        };
        axios.post('https://akademia108.pl/api/social-app/post/add', postContent)
            .then(res => {
                props.getPrevPosts();
                setPostContent("");
                postText.current.value = "";
            })
            .catch(err => {
                console.error(err);
            });
    }

    const adjustTextareaHeight = () => {
        postText.current.style.height = 'auto';
        postText.current.style.height = `${postText.current.scrollHeight}px`;
        if (postText.current.scrollHeight < postText.current.offsetHeight) {
            postText.current.style.height = `${postText.current.scrollHeight - 20}px`;
        }
    };

    return (
        <form className="addPostForm">
            <textarea ref={postText} placeholder="Napisz coś o sobie" onChange={() => {
                setPostContent({ content: postText.current.value });
                adjustTextareaHeight();
            }}></textarea>
            <button onClick={addPost}>Add post</button>
        </form>
    )
}
export default AddPost;