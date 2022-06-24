import { gql, useQuery } from '@apollo/client';

const GET_ALL_POSTS = gql`
query{
    posts{
        id
        title
        body
        published
    }
}
`


export const useFetchPosts = () => {
    const {data, error, loading} = useQuery(GET_ALL_POSTS);

    return { data, error, loading };

}