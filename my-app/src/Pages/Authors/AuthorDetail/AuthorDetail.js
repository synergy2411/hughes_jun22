import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const AuthorDetail = () => {
    const params = useParams();
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        const fetchAuthor = async () => {
            const resp = await axios.get(`http://localhost:3030/authors/${params.authorId}`)
            setAuthor(resp.data)
        }

        fetchAuthor()
    }, [params.authorId])

    if (author !== null) {
        return (
            <div className='row'>
                <div className='col-6 offset-3 text-center'>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <h5>{author.name.toUpperCase()}</h5>
                            <p className='lead'>Email : {author.email}</p>
                            <em>Age : {author.age}</em>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return <p>Loading....</p>
    }
}

export default AuthorDetail;
