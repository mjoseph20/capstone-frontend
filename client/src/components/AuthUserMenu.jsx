import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import defaultProfileImage from '../assets/default_profile.png';

function AuthUserMenu({ setIsLoggedIn }) {

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle className="btn btn-secondary" variant="secondary" id="dropdown-basic">Profile Image</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item><Link className='dropdown-item' to='/profile'>View Profile</Link></Dropdown.Item>
                <Dropdown.Item><Link className='dropdown-item' to='/team'>View Team</Link></Dropdown.Item>
                <Dropdown.Item><Link className='dropdown-item' to='/logout' onClick={handleLogout}>Log Out</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default AuthUserMenu;