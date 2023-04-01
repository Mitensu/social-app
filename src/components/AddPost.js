import React, { useState, useRef} from "react";
import axios from "axios";

const AddPost = () => {

    const [postContent, setPostContent] = useState({});
    const postText = useRef(null);
    

    const addPost = (e) => {
        e.preventDefault();
        axios.post('https://akademia108.pl/api/social-app/post/add', postContent)
        .then(res => console.log(res));
    }

    return(
        <div className="addPost">
            <form>
                <textarea ref={postText} placeholder="Napisz coś o sobie" onChange={() => setPostContent({content: postText.current.value})}></textarea>
                <button onClick={addPost}>Add post</button>
            </form>
        </div>
    )
}
export default AddPost;