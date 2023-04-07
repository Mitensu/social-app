import React, { useState, useEffect } from "react";
import axios from "axios";
import './FollowRecommendations.css';

const FollowRecommendations = (props) => {

    const [recommendations, setRecommendations] = useState([]);

    const getRecommendations = () => {
        axios.post('https://akademia108.pl/api/social-app/follows/recommendations')
        .then(res => setRecommendations(res.data))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        getRecommendations();
    }, []);

    return(
        <div className="followRecommendations">
            {recommendations.map(recommendation => {
                return(
                    <div className="followBox">
                        <img src={recommendation.avatar_url} alt={recommendation.username}/>
                        <h3>{recommendation.username}</h3>
                        <button>Follow</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowRecommendations;