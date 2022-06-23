import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Auth = () => {

    const context = useContext(AuthContext);

    return (
        <div>
            <h1>The user is {context.isLoggedIn ? '' : 'NOT'} authenticated.</h1>
        </div>
        // <AuthContext.Consumer>
        //     {(context) => {
        //         return (
        //             <div>
        //                 <h1>The user is { context.isLoggedIn ? '' : 'NOT' } authenticated.</h1>
        //             </div>
        //         )
        //     }}

        // </AuthContext.Consumer>
    );
}

export default Auth;
