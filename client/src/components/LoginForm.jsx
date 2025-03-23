import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setIsLoggedIn }) {

    const [user, setUser] = useState({});
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/registeredUser/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                navigate('/');
            } else {
                response.text().then(text => {
                    try {
                        const fetchedErrors = JSON.parse(text);
                        setErrors(fetchedErrors);
                    } catch (error) {
                        setErrors(['An unexpected error occurred.']);
                    }
                });
            }
        }).catch(error => {
            setErrors(['Network error: ' + error.message]);
        });
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin = () => {
        setIsLoggedIn(true);
      };

    return (
        <div className="row mt-5">
            <h2 className='text-center'>Log Into Your Account</h2>
            {errors.length > 0 && (<ul id="errors" className='alert alert-warning'>{errors.map(error => <li key={error}>{error}</li>)}</ul>)}
            <div className="col-3"></div>
            <form className="form form-signup justify-content-center border col-6 p-1" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className='form-label'>
                        Username:
                        <input type="text" name="username" className='form-control' id='username' value={user.username} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor='password' className='form-label'>
                        Password:
                        <input type="password" name="password" className='form-control' id='password' value={user.password} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <button className='btn btn-primary' type="submit" onClick={handleLogin}>Log In</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;