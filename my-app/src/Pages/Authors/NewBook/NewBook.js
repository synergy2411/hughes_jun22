import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useHistory, useParams, Prompt } from 'react-router-dom';
import { v4 } from 'uuid';

const NewBook = () => {
    const inputTitleRef = useRef(null)
    const inputNumOfPagesRef = useRef(null)
    const { authorId } = useParams()
    const history = useHistory();
    const [formIsBlurred, setFormIsBlurred] = useState(false)

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3030/books", JSON.stringify({
            id: v4(),
            title : inputTitleRef.current.value,
            numOfPages : inputNumOfPagesRef.current.value,
            author: authorId
        }), {
            headers : {
                "Content-Type" : "application/json"
            }
        }).then(resp => {
            history.replace(`/authors/${authorId}`)
        }).catch(console.log)
    }

    return (
        <>
        <Prompt when={formIsBlurred} message={`Are you sure to leave this form?`} />
        <form onSubmit={submitHandler} onBlur={() => { setFormIsBlurred(true) }}>
            {/* title */}
            <div className='form-group'>
                <label htmlFor='title'>Title :</label>
                <input type="text" name="title" className="form-control" ref={inputTitleRef} />
            </div>
            {/* num of pages */}
            <div className='form-group'>
                <label htmlFor='numOfPages'>Number of Pages :</label>
                <input type="number" name="numOfPages" className="form-control" ref={inputNumOfPagesRef} />
            </div>
            {/* button */}
            <button type='submit' className='btn btn-block btn-success'>Add Books</button>
        </form>
        </>
    );
}

export default NewBook;
