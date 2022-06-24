import React, { useContext } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth-context';


const Header = () => {
    const context = useContext(AuthContext);
    const history = useHistory();

    const logoutClickHandler = () => {
        context.setIsLoggedIn(false);
        history.replace("/login")
    }

    return (
        <header>
            <nav className='navbar'>
                <ul className='nav nav-tabs'>
                    {!context.isLoggedIn && <li className='nav-item'>
                        <NavLink activeClassName="active" className='nav-link' to="/login">Login</NavLink>
                    </li>}
                    { context.isLoggedIn && <li className='nav-item'>
                        <NavLink activeClassName="active" to="/notes" className='nav-link'>Notes</NavLink></li>}
                    <li className='nav-item'>
                        <NavLink activeClassName="active" to="/authors" className='nav-link'>Authors</NavLink></li>
                    <li className='nav-item'>
                        <NavLink activeClassName="active" to="/posts" className='nav-link'>Posts</NavLink></li>
                </ul>
                {context.isLoggedIn && <button className='btn btn-sm btn-danger' 
                    onClick={logoutClickHandler} >Logout</button>}
            </nav>
        </header>
    );
}

export default Header;
