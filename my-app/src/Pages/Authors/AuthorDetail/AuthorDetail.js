import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, useParams } from "react-router-dom";
import MyBooks from '../MyBooks/MyBooks';
import NewBook from '../NewBook/NewBook';

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
                            <br />
                            <br />
                            <div className='text-center'>
                                <ul className='nav nav-pills'>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to={`/authors/${author.id}/books`}>My Books</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to={`/authors/${author.id}/add-new`}>Add New</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <hr />
                    <Route path={`/authors/:authorId/books`}>
                        <MyBooks />
                    </Route>
                    <Route path={`/authors/:authorId/add-new`}>
                        <NewBook />
                    </Route>
                </div>
            </div>
        );
    } else {
        return <p>Loading....</p>
    }
}

export default AuthorDetail;
