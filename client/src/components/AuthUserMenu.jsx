import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function AuthUserMenu() {
    const { logout } = useAuth();
    const { user } = useAuth();
    const defaultProfileImage = 'https://mj-capstone-bucket.s3.us-east-1.amazonaws.com/images/default_profile.png'

    const handleLogout = () => {
        logout();
    };

    return (
        <Dropdown>
            <Dropdown.Toggle className="btn btn-secondary" variant="secondary" id="dropdown-basic"><img className='img-fluid' src={defaultProfileImage} style={{width: "50px", height: "50px"}}/></Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item><Link className='dropdown-item' to={`/profile/${user.id}`}>View Profile</Link></Dropdown.Item>
                <Dropdown.Item><Link className='dropdown-item' to='/team'>View Team</Link></Dropdown.Item>
                <Dropdown.Item><Link className='dropdown-item' to='/' onClick={handleLogout}>Log Out</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default AuthUserMenu;