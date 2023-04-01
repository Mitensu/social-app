import React, { useEffect, useState } from "react";
import axios from 'axios';
import Post from "../components/Post";
import "./Home.css";
import AddPost from "../components/AddPost";

const Home = (props) => {

    const [posts, setPosts] = useState([]);

    const getLatestPosts = () => {

        axios.post('http://akademia108.pl/api/social-app/post/latest')
            .then(res => {
                setPosts(res.data)

            })
    };

    const getNextPosts = () => {

        axios.post('https://akademia108.pl/api/social-app/post/older-then', {
            date: posts[posts.length - 1].created_at
        })
        .then(res => {
            setPosts(posts.concat(res.data))
        })
        .catch(error => {
            if (error.response) {
                console.error(error.response.data);
                console.error(error.response.status);
                console.error(error.response.headers);
            } else if (error.request) {
                console.error(error.request);
            } else {
                console.log('Error', error.message);
            }
        })

    }

    const getPrevPosts = () => {

        axios.post('https://akademia108.pl/api/social-app/post/newer-then', {
            date: posts[0].created_at
        })
        .then(res => {
            setPosts(res.data.concat(posts))
        })
    }

    useEffect(() => {
        getLatestPosts();
    }, []);

    return (
        <div className="home">
            <h2>Home Page</h2>
            <AddPost />
            <div className="postList">
            {posts.map(post => {
                return (
                    <Post key={post.id}
                        post={post}>
                    </Post>
                )
            })}
            <button onClick={getNextPosts}>Load more</button>
            </div>
        </div>
    );
};

export default Home;