import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Author.module.css';

const Author = (props) => {
    const history = useHistory();

    const onAuthorSelect = () => {
        history.push(`/authors/${props.id}`)
    }
    return (
        <div className='col-4'>
            <div onClick={onAuthorSelect} className={`card ${classes['the-item']}`}>
                <div className='card-header'>
                    <h6 className='text-center'>
                        {props.name.toUpperCase()}</h6>
                </div>
            </div>
        </div>
    );
}

export default Author;
