import React, { useState, useRef } from 'react';
import classes from "./Login.module.css";

const Login = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsBlurred, setEmailIsBlurred] = useState(false);

    const inputPasswordRef = useRef(null)

    let emailIsEmpty = enteredEmail.trim() !== '';
    let emailIsEmptyAndBlurred = !emailIsEmpty && emailIsBlurred
    let emailContainsAtSign = enteredEmail.includes("@");
    let emailContainsAtSignAndBlurred = !emailContainsAtSign && emailIsBlurred


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Email : ", enteredEmail);
        console.log("Password : ", inputPasswordRef.current.value)
    }

    const passwordBlurHandler = () => {}

    let emailClasses = emailIsEmpty && emailContainsAtSign && emailIsBlurred ?
                             classes['Valid'] : classes['Invalid']

    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* email - Controlled*/}
                <label htmlFor='email'>Email : </label>
                <input type="text"
                    className={`form-control ${emailClasses}`}
                    name="email"
                    value={enteredEmail}
                    onBlur = { () => setEmailIsBlurred(true)}
                    onChange={(event) => setEnteredEmail(event.target.value)} />
                    
                    {emailIsEmptyAndBlurred && <div className='alert alert-danger'>- Email is mandatory field</div>}
                    {emailContainsAtSignAndBlurred && <div className='alert alert-danger'>- Email must be in proper format</div>}

                {/* password - Uncontrolled*/}
                <label htmlFor='password'>Password :</label>
                <input type="password"
                    className='form-control'
                    name='password'
                    ref={inputPasswordRef}
                    onBlur={passwordBlurHandler} />
               
                {/* buttons */}
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Login;
