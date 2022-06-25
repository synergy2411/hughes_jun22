import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFetchPosts } from '../../Hooks/useFetchPosts';
import { useMutation, gql } from '@apollo/client';

const DELETE_POST = gql`
    mutation deletedPost($id : ID!) {
        deletePost(id:$id){
            id 
            title 
            body
    }
}
`

const Posts = () => {
    //  const {data, error, loading} = useQuery(GET_ALL_POSTS);
    let {data, error, loading } = useFetchPosts();

    const [mutateFn] = useMutation(DELETE_POST);

  
    if (error) {
        return <p>Something bad happened!!</p>
    }
    if (loading) {
        return <p>Loading....</p>
    }
   
    const deleteHandler = (postId) => {
        mutateFn({
            variables : {
                id : postId
            }
        }).then(resp => {
            console.log("DELETED", resp)
        }).catch(console.log)
    }
    return (
        <div>
            <ul className='list-group'>
                {data && data.posts.map(post => <li className='list-group-item'
                    onClick={() => deleteHandler(post.id)}
                    key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}

export default Posts;
