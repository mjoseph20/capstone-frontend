import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CastDetail() {
    const { castMemberId } = useParams();
    const [castMember, setCastMember] = useState({});
    const navigate = useNavigate();
    const defaultProfileImage = 'https://mj-capstone-bucket.s3.us-east-1.amazonaws.com/images/default_profile.png';

    useEffect(() => {
        fetch(`http://localhost:8080/api/cast-members/${castMemberId}`)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => setCastMember(data));
                } else {
                    response.json().then(error => console.log(error));
                    navigate('/cast-members');
                }
            })
    }, [castMemberId]);

    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    }

    return (
        <div>
            <div className="card mt-5 mx-auto" style={{ width: "25rem" }}>
                <img src={defaultProfileImage} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{castMember.name}</h5>
                    <p className="card-text">{castMember.professionalTitle}</p>
                </div>
                <div className="card-footer">
                    <ul className="list-group">
                        <li className="list-group-item">{formatDate(castMember.birthDate)}</li>
                        <li className="list-group-item">{castMember.biography}</li>
                        <li className="list-group-item">Fun Fact: {castMember.randomFact}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CastDetail;