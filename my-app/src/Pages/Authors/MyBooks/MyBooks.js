import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MyBooks = () => {
    const [myBooks, setMyBooks] = useState([])
    const params = useParams();

    useEffect(() => {
        const fetchMyBooks = async() => {
            const resp = await axios.get(`http://localhost:3030/books`);
            setMyBooks(resp.data.filter(book => book.author === params.authorId))
        }
        fetchMyBooks()
    }, [params.authorId])

    if(myBooks.length > 0){
        return (
            <ul className='list-group'>
                {myBooks.map(book => <li className='list-group-item' 
                                            key={book.id}>{book.title} - {book.numOfPages} pages</li>)}
            </ul>
        );
    }else{
        return <p>No books found</p>
    }
}

export default MyBooks;
