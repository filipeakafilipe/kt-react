import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import { v4 as uuidv4 } from 'uuid';

export const  Posts = () => {
    const [postsList, setPostsList] = useState([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                response.json().then(data => setPostsList(data));
            })
    }, []);

    return (
        <>
            <input onChange={e => setNewPost(e.target.value)}></input>
            <button type="button" onClick={() => setPostsList(prevState => [...prevState, { id: uuidv4(), title: newPost }])}>Adicionar Post</button>
            <ul>
                {postsList.map(
                    post => <PostItem key={post.id} title={post.title} />
                )}
            </ul>
        </>
    )
}
