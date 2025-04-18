import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EpisodeListTile from './EpisodeListTile';


function EpisodesList() {

    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/episodes")
            .then((response) => response.json())
            .then((data) => {
                setEpisodes(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Episodes List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="d-flex flex-wrap justify-content-center overflow-auto mt-5">
                    <ul>
                        {episodes.map((episode) => (
                            <li key={episode.id} className="list-unstyled">
                                <Link to={`/episodes/${episode.id}`} className="text-decoration-none text-body">
                                    <EpisodeListTile episode={episode} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default EpisodesList;