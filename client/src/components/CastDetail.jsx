import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Orange from "../assets/orange.jpg";

function CastDetail() {
    const { castMemberId } = useParams();
    const [castMember, setCastMember] = useState({});
    const navigate = useNavigate();

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

    function formatDateToZodiac(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        switch (date) {
            case (month === 1 && day >= 20) || (month === 2 && day <= 18):
                return 'Aquarius';
            case (month === 2 && day >= 19) || (month === 3 && day <= 20):
                return 'Pisces';
            case (month === 3 && day >= 21) || (month === 4 && day <= 19):
                return 'Aries';
            case (month === 4 && day >= 20) || (month === 5 && day <= 20):
                return 'Taurus';
            case (month === 5 && day >= 21) || (month === 6 && day <= 20):
                return 'Gemini';
            case (month === 6 && day >= 21) || (month === 7 && day <= 22):
                return 'Cancer';
            case (month === 7 && day >= 23) || (month === 8 && day <= 22):
                return 'Leo';
            case (month === 8 && day >= 23) || (month === 9 && day <= 22):
                return 'Virgo';
            case (month === 9 && day >= 23) || (month === 10 && day <= 22):
                return 'Libra';
            case (month === 10 && day >= 23) || (month === 11 && day <= 21):
                return 'Scorpio';
            case (month === 11 && day >= 22) || (month === 12 && day <= 21):
                return 'Sagittarius';
            case (month === 12 && day >= 22) || (month === 1 && day <= 19):
                return 'Capricorn';
            default:
                return 'Unknown';
        }
    }

    return (
        <div>
            <div className="card mt-5 mx-auto" style={{ width: "50rem" }}>
                <img src={Orange} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{castMember.name}</h5>
                    <p className="card-text">{castMember.professionalTitle}</p>
                </div>
                <div className="card-footer">
                    <ul className="list-group">
                        <li className="list-group-item">{(castMember.birthDate)}</li>
                        <li className="list-group-item">{castMember.biography}</li>
                        <li className="list-group-item">Fun Fact: {castMember.randomFact}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CastDetail;