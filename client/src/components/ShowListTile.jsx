import Orange from "../assets/orange.jpg";

function ShowListTile({ show }) {
    
    function formatDate(date) {
        const options = { year: "numeric", month: "long" };
        return new Date(date).toLocaleDateString(undefined, options);
    }

    return (
        <div className="card m-3 mx-auto" style={{ maxWidth: "800px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Orange} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{show.name}</h5>
                        <p className="card-text">{show.genre} {show.rating}.0/10.0</p>
                        <p className="card-text">{formatDate(show.startDate)} - {formatDate(show.endDate)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowListTile;