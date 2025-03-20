import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import defaultProfileImage from '../assets/default_profile.png';

function NavBar({ isLoggedIn, handleLogout }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const items = [
    { name: 'All Items', link: '/' },
    { name: 'Shows', link: '/' },
    { name: 'Episodes', link: '/' },
    { name: 'Cast Members', link: '/' }
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleFocus = () => {
    setDropdownVisible(true);
  }

  const handleBlur = () => {
    setDropdownVisible(false);
  }

  const filteredItems = items.filter(item => item.name.toLowerCase());

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>Home Icon</Link>
        <form className="d-flex" role="search">
          <div className="dropdown search-container me-2">
            <span className="glyphicon glyphicon-search"></span>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ width: "500px" }}
            />
            {dropdownVisible && (
              <ul className="dropdown-menu dropdown-menu-light show" style={{ maxHeight: "200px" }}>
                {filteredItems.map((item, index) => (
                  <li key={index} className="dropdown-item">
                    <a href={item.link}>{item.name}</a></li>
                ))}
              </ul>
            )}
          </div>
        </form>
        {isLoggedIn ?
          <Dropdown>
            <Dropdown.Toggle class="btn btn-secondary" variant="success" id="dropdown-basic">Profile Image</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link className='dropdown-item' to='/'>View Profile</Link></Dropdown.Item>
              <Dropdown.Item><Link className='dropdown-item' to='/'>View Team</Link></Dropdown.Item>
              <Dropdown.Item><Link className='dropdown-item' to='/' onClick={handleLogout}>Log Out</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          : (
            <div className='btn-group'>
              <Link to='/login' className="btn btn-outline-primary" type="submit">Login</Link>
              <Link to='/signup' className="btn btn-primary" type="submit">Sign Up</Link>
            </div>
          )
        }
      </div>
    </nav>
  );
}

export default NavBar;