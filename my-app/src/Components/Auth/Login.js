import React, {useState, useRef} from 'react';

const Login = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(true);

    const inputPasswordRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Email : ", enteredEmail);
        console.log("Password : ", inputPasswordRef.current.value)
    }

    const passwordBlurHandler = () => {
        if(inputPasswordRef.current.value.trim() === ''){
            setPasswordIsValid(false)
        }else if (inputPasswordRef.current.value.length < 6) {
            setPasswordIsValid(false)
        }else{
            setPasswordIsValid(true)
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* email - Controlled*/}
                <label htmlFor='email'>Email : </label>
                <input type="text" 
                    className='form-control' 
                    name="email"
                    value={enteredEmail}
                    onChange={(event) => setEnteredEmail(event.target.value)} />
                
                {/* password - Uncontrolled*/}
                <label htmlFor='password'>Password :</label>
                <input type="password" 
                    className='form-control' 
                    name='password' 
                    ref={inputPasswordRef} 
                    onBlur={passwordBlurHandler}/>
                    {!passwordIsValid && <div className='alert alert-danger'>
                        - Password is madatory field and atleast have 6 characters
                    </div>}
                {/* buttons */}
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Login;
