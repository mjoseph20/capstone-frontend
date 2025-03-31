import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    const logo_1 = 'https://mj-capstone-bucket.s3.us-east-1.amazonaws.com/images/logo_1.png'
    return (
        <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-danger" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <div className="offcanvas-title mx-auto" id="offcanvasNavbarLabel">
                        <img src={logo_1} alt="logo_1" width={"200px"} height={"150px"}/>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body text-bg-white">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/shows'>
                                Shows
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/episodes'>
                                Episodes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/cast-members'>
                                Cast Members
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;