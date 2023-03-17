import React from 'react';

function Post() {

    return (
        <div className='postList'>
            {posts.map((post) => {
                return (
                    <Post
                        post={post}>
                    </Post>
                )
            })}
        </div>
    )
}

export default Post;