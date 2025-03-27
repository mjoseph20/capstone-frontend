import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function LoginForm() {

    const { login } = useAuth();
    const [errors, setErrors] = useState([]);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/registeredUser/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                response.json().then(data => {
                    login(data);
                    localStorage.setItem('loggedInUser', JSON.stringify(data));
                    navigate('/');
                });
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
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="row mt-5">
            <h2 className='text-center'>Log Into Your Account</h2>
            {errors.length > 0 && (<ul id="errors" className='alert alert-warning'>{errors.map(error => <li key={error}>{error}</li>)}</ul>)}
            <div className="col-3"></div>
            <form className="form form-signup text-center border shadow-lg col-6 p-1" onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <label htmlFor="username" className='form-label'>
                        Username:
                        <input type="text" name="username" className='form-control' id='username' value={loginData.username} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor='password' className='form-label'>
                        Password:
                        <input type="password" name="password" className='form-control' id='password' value={loginData.password} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group mb-3">
                    <button className='btn btn-primary' type="submit" onClick={login}>Log In</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;