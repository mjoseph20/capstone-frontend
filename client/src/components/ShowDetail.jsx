import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Orange from "../assets/orange.jpg";


function ShowDetail() {
    const { showId } = useParams();
    const [show, setShow] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/shows/${showId}`)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => setShow(data));
                } else {
                    response.json().then(error => console.log(error));
                    navigate('/shows');
                }
            })
    }, [showId]);

    function formatDate(date) {
        const options = { year: "numeric", month: "long" };
        return new Date(date).toLocaleDateString(undefined, options);
    }

    return (
        <div>
            <div className="card mt-5 mx-auto" style={{ width: "50rem" }}>
                <img src={Orange} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{show.name}</h5>
                    <p className="card-text">{show.storyline}</p>
                </div>
                <div className="card-footer">
                    <ul className="list-group">
                        <li className="list-group-item">{show.genre}</li>
                        <li className="list-group-item">{show.rating}.0/10.0</li>
                        <li className="list-group-item">{formatDate(show.startDate)} - {formatDate(show.endDate)}</li>
                        <li className="list-group-item">Created by: {show.creator}</li>
                        <li className="list-group-item">{show.productionCompany}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ShowDetail;