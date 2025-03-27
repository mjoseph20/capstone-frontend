import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CastListTile from "./CastListTile";

function CastList({ isEditMode = false }) {
    const [castMembers, setCastMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/cast-members")
            .then((response) => response.json())
            .then((data) => {
                setCastMembers(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Cast Members</h1>
            {isEditMode && (
                <div className="alert alert-warning">
                    <p>Click on a cast member to swap them with another cast member.</p>
                </div>
            )}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="d-flex flex-wrap justify-content-center overflow-auto mt-5">
                    <ul>
                        {castMembers.map((castMember) => (
                            <li key={castMember.id} className="list-unstyled">
                                <Link to={`/cast-members/${castMember.id}`} className="text-decoration-none text-body">
                                    <CastListTile castMember={castMember} isEditMode={isEditMode} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CastList;