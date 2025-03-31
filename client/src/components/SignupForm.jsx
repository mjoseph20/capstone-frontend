import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './AuthContext';

function SignupForm({ isEditMode = false }) {

    const params = useParams();
    const { user, setUser, isLoggedIn } = useAuth();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: params.id,
        name: '',
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
    });

    useEffect(() => {
        if (isEditMode && user) {
            setFormData({
                id: user.id,
                name: user.name,
                email: user.email,
                username: user.username,
                password: user.password,
                passwordConfirmation: user.password
            });
        } else {
            setFormData({
                id: '',
                name: '',
                email: '',
                username: '',
                password: '',
                passwordConfirmation: ''
            });
        }
    }, [isEditMode, user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = isEditMode ? `http://localhost:8080/api/registeredUser/${params.id}` : "http://localhost:8080/api/registeredUser";
        const method = isEditMode ? 'PUT' : 'POST';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                if (isEditMode) {
                    setUser(formData);
                    localStorage.setItem('loggedInUser', JSON.stringify(formData));
                    navigate(`/profile/${params.id}`);
                } else {
                    navigate('/login');
                }
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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="row mt-5">
            {isEditMode ? <h2 className='text-center'>Edit Your Account</h2> : <h2 className='text-center'>Create An Account</h2>}
            {errors.length > 0 && (<ul id="errors" className='alert alert-warning'>{errors.map(error => <li key={error} className=''>{error}</li>)}</ul>)}
            <div className="col-3"></div>
            <form className="form form-signup text-center border shadow-lg col-6 p-1" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className='form-label'>
                        Name:
                        <input type="text" name="name" className='form-control' id='name' value={formData.name} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className='form-label'>
                        Email:
                        <input type="email" name="email" className='form-control' id='email' value={formData.email} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="username" className='form-label'>
                        Username:
                        <input type="text" name="username" className='form-control' id='username' value={formData.username} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor='password' className='form-label'>
                        Password:
                        <input type="password" name="password" className='form-control' id='password' value={formData.password} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor='passwordConfirmation' className='form-label'>
                        Confirm Password:
                        <input type="password" name="passwordConfirmation" className='form-control' id='passwordConfirmation' value={formData.passwordConfirmation} onChange={handleChange}/>
                    </label>
                </div>
                {!isEditMode && (
                    <div className="form-group">
                        <label htmlFor='terms' className='form-check-label'>
                            <input type="checkbox" name="terms" className='form-check-input me-1' id='terms' required />
                            I agree to the terms
                        </label>
                    </div>
                )}
                {isEditMode && (<button type="button" class="btn btn-secondary m-2" onClick={() => navigate(-1)}>Cancel</button>)}
                <div className="form-group">
                    <button className='btn btn-primary mb-1' type="submit">{isEditMode ? 'Save Changes' : 'Sign Up'}</button>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;