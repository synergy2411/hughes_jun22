import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import classes from "./Login.module.css";

const Login = () => {
    const context = useContext(AuthContext)

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsBlurred, setEmailIsBlurred] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(true)

    const history = useHistory();

    const inputPasswordRef = useRef(null)

    let emailIsEmpty = enteredEmail.trim() !== '';
    let emailIsEmptyAndBlurred = !emailIsEmpty && emailIsBlurred
    let emailContainsAtSign = enteredEmail.includes("@");
    let emailContainsAtSignAndBlurred = !emailContainsAtSign && emailIsBlurred


    const submitHandler = (e) => {
        e.preventDefault();
        context.setIsLoggedIn(true)
        setTimeout(() => {
            history.replace("/authors");
        }, 1500)
    }

    const passwordBlurHandler = () => { 
        if(inputPasswordRef.current.value.trim() === ''){
            setPasswordIsValid(false)
        }else if(inputPasswordRef.current.value.length < 6){
            setPasswordIsValid(false)
        }else{
            setPasswordIsValid(true)
        }
    }
   
    let emailClasses = !emailIsEmpty && emailContainsAtSign && emailIsBlurred ?
                             classes['Valid'] : classes['Invalid']

    return (
        <div className='row'>
            <div className='col-8 offset-2'>
                <h4 className="text-center">Login Form</h4>
            <form onSubmit={submitHandler}>
                {/* email - Controlled*/}
                <label htmlFor='email'>Email : </label>
                <input type="text"
                    // className={`form-control ${emailClasses}`}
                    className={`form-control`}
                    name="email"
                    value={enteredEmail}
                    onBlur = { () => setEmailIsBlurred(true)}
                    onChange={(event) => setEnteredEmail(event.target.value)} />

                    {emailIsEmptyAndBlurred && <div className='alert alert-danger'>- Email is mandatory field</div>}
                    {emailContainsAtSignAndBlurred && <div className='alert alert-danger'>- Email must be in proper format</div>}

                {/* password - Uncontrolled*/}
                <label htmlFor='password'>Password :</label>
                <input type="password"
                    className={`form-control ${!passwordIsValid ? classes['Invalid'] : ''} `}
                    name='password'
                    ref={inputPasswordRef}
                    onBlur={passwordBlurHandler} />
                    {!passwordIsValid && <div className='alert alert-danger'>
                        - Password is mandatory field and should contain at least 6 characters</div>}               
                        <br/>
                {/* buttons */}
                <button className='btn btn-primary btn-block' type='submit'>Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Login;
