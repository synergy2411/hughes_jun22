import React, { useState } from 'react';
import { v4 } from 'uuid';

const AddNote = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredCreatedAt, setEnteredCreatedAt] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault();
        let newNote = {
            title : enteredTitle,
            amount : enteredAmount,
            createdAt : new Date(enteredCreatedAt),
            id : v4()
        }
        // console.log(newNote);
        props.onAddNote(newNote)
    }
    return (
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h6 className='text-center'>
                            Add New Note
                        </h6>
                        <form onSubmit={submitHandler}> 
                            {/* title */}
                            <div className='form-group'>
                                <label htmlFor='title'>Title : </label>
                                <input type="text" 
                                    name='title' 
                                    className='form-control' 
                                    value={enteredTitle}
                                    onChange={titleChangeHandler}/>
                            </div>
                            {/* amount */}
                            <div className='form-group'>
                                <label htmlFor='amount'>Amount : </label>
                                <input type="number"
                                    name="amount"
                                    className='form-control'
                                    value={enteredAmount}
                                    min="0.1"
                                    step="0.1"
                                    onChange={(event) => setEnteredAmount(event.target.value)}/>
                            </div>
                            {/* createdAt */}
                            <div className='form-group'>
                                <label htmlFor='created-at'>Date : </label>
                                <input type="date" 
                                    name="created-at" 
                                    className='form-control'
                                    value={enteredCreatedAt}
                                    min="2019-04-01"
                                    max="2022-12-31"
                                    onChange={event => setEnteredCreatedAt(event.target.value)} />
                            </div>
                            {/* Buttons */}
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <button type='submit' className='btn btn-primary btn-block'>Add</button>
                                    </div>
                                    <div className='col-6'>
                                    <button className='btn btn-warning btn-block'
                                        onClick={props.onCancel}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNote;
