import Orange from '../assets/orange.jpg';

function EpisodeListTile({ episode }) {
    return (
        <div className="card m-3 mx-auto" style={{ maxWidth: "800px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Orange} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8 text-start">
                    <div className="card-body">
                        <h5 className="card-title">{episode.title}</h5>
                        <p className="card-text">{episode.description}</p>
                        <p className="card-text">S:{episode.season} - E:{episode.episodeNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EpisodeListTile;