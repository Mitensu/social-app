import React, { useEffect, useState } from "react";
import axios from 'axios';

function Home(props) {

    const [posts, setPosts] = useState([]);

    const getLatestPosts = () => {

        axios.post('http://akademia108.pl/api/social-app/post/latest')
            .then(res => {
                console.log(res);
                setPosts(res.data)

            })
    }

    useEffect(() => {
        getLatestPosts();
    }, []);

    return (
        <div className="Home">
            <h2>Home Page</h2>
            <button onClick={getLatestPosts}>Try me!</button>
            {posts.map(post => {
                return (

                    <div className="post">
                        <img src={post.user.avatar_url}></img>
                        <p>{post.content}</p>
                        <time>{post.created_at}</time>

                    </div>

                )
            })}
        </div>
    );
};

export default Home;