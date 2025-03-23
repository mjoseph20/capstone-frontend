import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CastListTile from "./CastListTile";

function CastList() {
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
            <h1>Cast Members</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {castMembers.map((castMember) => (
                        <li key={castMember.id} className="list-unstyled">
                            <Link to={`/cast-members/${castMember.id}`} className="text-decoration-none text-body">
                                <CastListTile castMember={castMember} />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CastList;