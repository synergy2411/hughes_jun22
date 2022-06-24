import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Author from './Author/Author';
import AuthContext from '../../context/auth-context';
import { Redirect, Route, useHistory } from 'react-router-dom';

const Authors = () => {
    const context = useContext(AuthContext);
    const history = useHistory()
    const [authors, setAuthors] = useState([]);

  

    useEffect(() => {
        if(context.isLoggedIn){
            const fetchAuthors = async () => {
                const res = await axios.get(`http://localhost:3030/authors`)
                setAuthors(res.data)
            }
            fetchAuthors();
        }else{
            history.replace("/login");
        }
    }, [context.isLoggedIn, history])

    return (
        <div className='container'>
            <div className='row'>
                {authors.length > 0 && authors.map(author => <Author key={author.id} {...author} />)}
            </div>
        </div>
    );
}

export default Authors;
