import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/registeredUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                navigate('/login');
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

    return (
        <div className="row mt-5">
            <h2 className='text-center'>Create An Account</h2>
            {errors.length > 0 && (<ul id="errors" className='alert alert-warning'>{errors.map(error => <li key={error}>{error}</li>)}</ul>)}
            <div className="col-3"></div>
            <form className="form form-signup justify-content-center border col-6 p-1" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className='form-label'>
                        Name:
                        <input type="text" name="name" className='form-control' id='name' value={user.name} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className='form-label'>
                        Email:
                        <input type="email" name="email" className='form-control' id='email' value={user.email} onChange={handleChange} />
                    </label>
                </div>
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
                    <label htmlFor='passwordConfirmation' className='form-label'>
                        Confirm Password:
                        <input type="password" name="passwordConfirmation" className='form-control' id='passwordConfirmation' />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor='terms' className='form-check-label'>
                        <input type="checkbox" name="terms" className='form-check-input me-1' id='terms' required />
                        I agree to the terms
                    </label>
                </div>
                <div className="form-group">
                    <button className='btn btn-primary' type="submit">Sign up</button>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;