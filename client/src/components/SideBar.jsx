import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/all'>
                                All Items
                            </Link>
                        </li>
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