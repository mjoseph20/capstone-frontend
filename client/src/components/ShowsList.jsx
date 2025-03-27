import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowListTile from "./ShowListTile";

function ShowsList() {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/shows")
            .then((response) => response.json())
            .then((data) => {
                setShows(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Shows</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="d-flex flex-wrap justify-content-center overflow-auto mt-5">
                    <ul >
                        {shows.map((show) => (
                            <li key={show.id} className="list-unstyled">
                                <Link to={`/shows/${show.id}`} className="text-decoration-none text-body">
                                    <ShowListTile show={show} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ShowsList;