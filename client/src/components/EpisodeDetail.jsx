import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EpisodeDetail() {
    const { episodeId } = useParams();
    const [episode, setEpisode] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/episodes/${episodeId}`)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => setEpisode(data));
                } else {
                    response.json().then(error => console.log(error));
                    navigate('/episodes');
                }
            })
    }, [episodeId]);

    function formatDate(date) {
        const options = { year: 'numeric', month: 'long' };
        return new Date(date).toLocaleDateString(undefined, options);
    }

    return (
        <div>
            <div className='card mt-5 mx-auto' style={{ width: '50rem' }}>
                <img src={episode.imageUrl} className='card-img-top' alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>{episode.title}</h5>
                    <p className='card-text'>{episode.description}</p>
                </div>
                <div className='card-footer'>
                    <ul className='list-group'>
                        <li className='list-group-item'>S:{episode.season} - E:{episode.episodeNumber}</li>
                        <li className='list-group-item'>{formatDate(episode.airDate)}</li>
                        <li className='list-group-item'>{episode.rating}.0/10.0</li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default EpisodeDetail;