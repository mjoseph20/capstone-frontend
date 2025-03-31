import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import GuestUserMenu from './GuestUserMenu';
import AuthUserMenu from './AuthUserMenu';
import SideBar from './SideBar'
import { useAuth } from './AuthContext';


function NavBar() {

  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const logo_2 = 'https://mj-capstone-bucket.s3.us-east-1.amazonaws.com/images/logo_2.png'

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>
          <img src={logo_2} alt="logo" width="50" height="50" />
        </Link>
        <SideBar />
        {isLoggedIn ? <AuthUserMenu setIsLoggedIn={setIsLoggedIn} /> : (<GuestUserMenu />)}
      </div>
    </nav>
  );
}

export default NavBar;