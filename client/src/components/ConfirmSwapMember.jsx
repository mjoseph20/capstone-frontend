import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ConfirmSwapMember() {
    const { existingCastMemberId } = useParams();
    const { castMemberId } = useParams();
    const navigate = useNavigate();

    function swapMateInTeam() {
        fetch(`http://localhost:8080/api/cast-members/swap/${existingCastMemberId}/${castMemberId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log('Swapped team member!');
                navigate('/team');
            } else {
                response.text().then(text => {
                    console.log(text);
                });
            }
        }).catch(error => { console.error('Network error:', error); });
    }

    return (
        <div>
            <div className="card mx-auto" style={{ width: '18rem' }}>
                <div className='card-header'>
                    <h5 className="card-title text-center">Confirm Swap</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">Are you sure you want to swap Member #{existingCastMemberId} for member #{castMemberId}?</p>
                </div>
                <div className='card-footer d-flex justify-content-around'>
                    <button className='btn btn-warning me-2' onClick={() => swapMateInTeam()}>Confirm</button>
                    <button className='btn btn-primary' onClick={() => navigate(-1)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmSwapMember;