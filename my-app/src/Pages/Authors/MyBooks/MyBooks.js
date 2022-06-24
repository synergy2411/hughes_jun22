import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';


const sortBook =(myBooks, isAscending) => {
    return myBooks.sort((bookA, bookB) => {
        if(!isAscending){
            if(bookA.title > bookB.title) {
                return -1
            }
            else if(bookA.title < bookB.title){
                return 1
            }
            else {
                return 0
            }
        }else{
            if(bookA.title < bookB.title) {
                return -1
            }
            else if(bookA.title > bookB.title){
                return 1
            }
            else {
                return 0
            }
        }
    })
}

const MyBooks = () => {
    const [myBooks, setMyBooks] = useState([])
    const params = useParams();
    const history = useHistory();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const isAscending = query.get("sort") === 'asc';

    useEffect(() => {
        const fetchMyBooks = async() => {
            const resp = await axios.get(`http://localhost:3030/books`);
            setMyBooks(resp.data.filter(book => book.author === params.authorId))
        }
        fetchMyBooks()
    }, [params.authorId])

    if(myBooks.length > 0){

        const sortBookHandler = () => {
            history.push(`/authors/${params.authorId}/books?sort=${isAscending ? 'desc' : 'asc'}`)
        }

        const sortedBooks = sortBook(myBooks, isAscending);


        return (
            <>
            <button className='btn btn-dark btn-block'
                onClick={sortBookHandler}>Sort { isAscending ? 'Decending' : 'Ascending'}</button>
            <br/>
            <br/>
            <ul className='list-group'>
                {sortedBooks.map(book => <li className='list-group-item' 
                                            key={book.id}>{book.title} - {book.numOfPages} pages</li>)}
            </ul>
            </>
        );
    }else{
        return <p>No books found</p>
    }
}

export default MyBooks;
