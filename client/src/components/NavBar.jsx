import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import GuestUserMenu from './GuestUserMenu';
import AuthUserMenu from './AuthUserMenu';
import SideBar from './SideBar'

function NavBar({ isLoggedIn, setIsLoggedIn }) {

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>Home Icon</Link>
        <SideBar />
        <SearchBar />
        {isLoggedIn ? <AuthUserMenu setIsLoggedIn={setIsLoggedIn} /> : (<GuestUserMenu />)}
      </div>
    </nav>
  );
}

export default NavBar;