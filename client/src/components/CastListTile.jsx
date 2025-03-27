import { useAuth } from "./AuthContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState } from "react";

function CastListTile({ castMember, isEditMode }) {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const existingCastMember = useParams();
    const [onTeam, setOnTeam] = useState(false);
    const defaultProfileImage = 'https://mj-capstone-bucket.s3.us-east-1.amazonaws.com/images/default_profile.png';


    function addMateToTeam() {
        fetch(`http://localhost:8080/api/cast-members/add/${castMember.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log('Added to team!');
                setOnTeam(true);
                navigate('/team');
            } else {
                response.text().then(text => {
                    console.log(text);
                });
            }
        }).catch(error => { console.error('Network error:', error); });
    }



    return (
        <>
            <div className="card m-3 mx-auto" style={{ maxWidth: "800px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={defaultProfileImage} className="img-fluid rounded-start h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{castMember.name}</h5>
                            <p className="card-text">{castMember.professionalTitle}</p>
                        </div>
                        {isLoggedIn && (
                            <div className="d-flex justify-content-end p-3">
                                {castMember.active ? (
                                    <button className="btn btn-secondary disabled w-25">-</button>
                                ) : isEditMode && existingCastMember && existingCastMember.castMemberId ? (
                                    <Link to={`/cast-members/swap/${existingCastMember.castMemberId}/${castMember.id}`} className="btn btn-warning">Swap Teammate</Link>
                                ) : (
                                    <button onClick={addMateToTeam} className="btn btn-primary">Add to Team</button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}

export default CastListTile;