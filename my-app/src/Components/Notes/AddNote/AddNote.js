import React, { useState } from 'react';

const AddNote = () => {
    const [enteredTitle, setEnteredTitle] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    return (
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h6 className='text-center'>
                            Add New Note
                        </h6>
                        <form>
                            {/* title */}
                            <div className='from-group'>
                                <label htmlFor='title'>Title : </label>
                                <input type="text" 
                                    name='title' 
                                    className='form-control' 
                                    value={enteredTitle}
                                    onChange={titleChangeHandler}/>
                            </div>
                            {/* amount */}
                            {/* createdAt */}
                            {/* Buttons */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNote;
