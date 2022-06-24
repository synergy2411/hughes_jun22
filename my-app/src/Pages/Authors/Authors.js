import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Author from './Author/Author';

const Authors = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            const res = await axios.get(`http://localhost:3030/authors`)
            setAuthors(res.data)
        }
        fetchAuthors();
    }, [])
    
    return (
        <div className='container'>
            <div className='row'>
                {authors.length > 0 && authors.map(author => <Author key={author.id} {...author} />)}
            </div>
        </div>
    );
}

export default Authors;
