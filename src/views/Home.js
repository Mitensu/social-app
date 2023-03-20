import React, { useEffect, useState } from "react";
import axios from 'axios';
import Post from "../components/Post";
import "./Home.css";

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
        <div className="home">
            <h2>Home Page</h2>
            <div className="postList">
            {posts.map(post => {
                return (
                    <Post
                        post={post}>
                    </Post>
                )
            })}
            </div>
        </div>
    );
};

export default Home;