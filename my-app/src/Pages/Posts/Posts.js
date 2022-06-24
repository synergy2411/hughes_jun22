import React from 'react';
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
    const { data, error, loading } = useFetchPosts();

    const [mutateFn, { data : mData, error: mError, loading: mLoading}] = useMutation(DELETE_POST)

    if (error) {
        return <p>Something bad happened</p>
    }
    if (loading) {
        return <p>Loading....</p>
    }
    console.log(data);

    const deleteHandler = () => {
        mutateFn({
            variables : {
                id : "A001"
            }
        })
    }
    return (
        <div>
            <ul className='list-group'>
                {data && data.posts.map(post => <li className='list-group-item'
                    onClick={deleteHandler}
                    key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}

export default Posts;
