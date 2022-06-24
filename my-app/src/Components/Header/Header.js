import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <nav className='navbar'>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <NavLink activeClassName="active" className='nav-link' to="/login">Login</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName="active" to="/notes" className='nav-link'>Notes</NavLink></li>
                    <li className='nav-item'>
                        <NavLink activeClassName="active" to="/authors" className='nav-link'>Authors</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
