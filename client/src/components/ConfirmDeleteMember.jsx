import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate, useParams } from "react-router-dom";

function ConfirmDeleteMember() {
    const navigate = useNavigate();
    const { castMemberId } = useParams();

    const confirmDelete = () => {
        fetch(`http://localhost:8080/api/cast-members/remove/${castMemberId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                navigate('/team');
            } else {
                response.text().then(text => {
                    console.log(text);
                });
            }
        }).catch(error => {
            console.error('Network error:', error);
        });
    }

    return (
        <div>
            <div className="card text-center mx-auto mt-5" style={{ width: "18rem", height: "18rem" }}>
                <div className="card-header">
                    <p className="card-text">Confirm Deletion</p>
                </div>
                <div className="card-body text-center">
                    <p className="card-text my-5">Are you sure you want to remove this member from your team?</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-secondary me-2" onClick={() => navigate(-1)}>Cancel</button>
                    <button type="button" className="btn btn-danger" onClick={() => confirmDelete()}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDeleteMember;