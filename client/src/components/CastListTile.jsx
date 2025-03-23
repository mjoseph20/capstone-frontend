import Orange from "../assets/orange.jpg";

function CastListTile({ castMember }) {
    return (
        <div className="card m-3 mx-auto" style={{ maxWidth: "800px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Orange} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{castMember.name}</h5>
                        <p className="card-text">{castMember.professionalTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CastListTile;