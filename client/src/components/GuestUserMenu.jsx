import React from 'react';
import { Link } from 'react-router-dom';

function GuestUserMenu() {
    return (
        <div className='btn-group'>
            <Link to='/login' className="btn btn-outline-primary" type="submit">Login</Link>
            <Link to='/signup' className="btn btn-primary" type="submit">Sign Up</Link>
        </div>
    );
}

export default GuestUserMenu;