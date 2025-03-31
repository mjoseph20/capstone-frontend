import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ConfirmDeleteUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const confirmDelete = () => {
        fetch(`http://localhost:8080/api/registeredUser/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                logout();
                navigate('/');
            } else {
                response.text().then(text => {
                    console.log(text);
                });
            }
        }).catch(error => {
            console.error('Network error:', error);
        });
    };

    return (
        <div class="card text-center mx-auto mt-5" style={{ width: "18rem" }}>
            <div class="card-header">
                <p className="card-text">{user.name}, are you sure you want to delete your account? </p>
            </div>
            <div class="card-body">
                <p className="card-text">This action cannot be undone!</p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-secondary me-2" onClick={() => navigate(-1)}>Cancel</button>
                <button type="button" class="btn btn-danger" onClick={() => { confirmDelete(); }}>Confirm</button>
            </div>
        </div>
    );
}

export default ConfirmDeleteUser;