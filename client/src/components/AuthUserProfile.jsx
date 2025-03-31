import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

function AuthUserProfile() {

    const { user, setUser, isLoggedIn } = useAuth();
    const defaultProfileImage = 'https://mj-capstone-bucket.s3.us-east-1.amazonaws.com/images/default_profile.png';

    useEffect(() => {
        if (isLoggedIn) {
            fetch(`http://localhost:8080/api/registeredUser/${user.id}`, {
                method: 'GET',
                headers: {  
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(data => {
                        setUser(data);
                    });
                } else {
                    response.text().then(text => {
                        console.log(text);
                    });
                }
            }).catch(error => {
                console.error('Network error:', error);
            });
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return (
            <div className="container bg-warning mt-5 text-center p-2">
                <h1>Not sure how you got here :/</h1>
                <p>You must be logged in to view your profile.</p>
            </div>
        );
    }

    function convertPassword(password) {
        return password.split('').map(() => '*').join('');
    }

    return (
        <div className="container mt-5 text-center p-2">
            <h1>Profile</h1>
            <div className="card mx-auto mt-5 shadow-lg" style={{width: "20rem"}}>
                <img src={defaultProfileImage} className="card-img-top" alt="Profile" />
                    <div className="card-body">
                        <h5 className="card-title">Welcome, {user.name}!</h5>
                        <p className="card-text"></p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Username: {user.username}</li>
                        <li className="list-group-item">Password: {convertPassword(user.password)}</li>
                        <li className="list-group-item">Email: {user.email}</li>
                    </ul>
                    <div className="card-footer">
                        <Link to={`/signup/${user.id}`} className="btn btn-warning me-2">Edit Profile</Link>
                        <Link to={`/delete/${user.id}`} className="btn btn-danger">Delete Profile</Link>
                    </div>
            </div>
        </div>
    );
}

export default AuthUserProfile;