import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Landing() {
    const [shows, setShows] = useState([]);

    const theOffice = 'https://mj-capstone-bucket.s3.us-east-1.amazonaws.com/images/american_idol_show.jpg';
    const breakingBad = 'https://mj-capstone-bucket.s3.us-east-1.amazonaws.com/images/rhoa_show.jpg';
    const friends = 'https://mj-capstone-bucket.s3.us-east-1.amazonaws.com/images/love_is_blind_show.jpg';

    useEffect(() => {
        fetch("http://localhost:8080/api/shows")
            .then((response) => response.json())
            .then((data) => {
                setShows(data);
            });
    }, []);

    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide m-5">
                <div className="carousel-indicators mt-5 mb-0">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={theOffice} className="d-block w-50 h-50 mx-auto shadow-lg" alt="..." />
                        <div className="d-block w-50 h-50 mx-auto">
                            <figure>
                                <blockquote className="blockquote">
                                    <p className='p-3'>"Absolutely addictive! This reality TV show has everything you could want – drama, excitement, and a cast of unforgettable characters."</p>
                                </blockquote>
                                <figcaption className="blockquote-footer pb-3">
                                    Jessica Harper, <cite title="Source Title">Global Insight News</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={breakingBad} className="d-block w-50 h-50 mx-auto" alt="..." />
                        <div className="d-block w-50 h-50 mx-auto">
                            <figure>
                                <blockquote className="blockquote">
                                    <p className='p-3'>"A refreshing take on reality TV! This show stands out from the rest with its unique concept and genuine moments."</p>
                                </blockquote>
                                <figcaption className="blockquote-footer pb-3">
                                    Michael Thompson, <cite title="Source Title">World Watch Daily</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={friends} className="d-block w-50 h-50 mx-auto" alt="..." />
                        <div className="d-block w-50 h-50 mx-auto">
                            <figure>
                                <blockquote className="blockquote">
                                    <p className='p-3'>"Pure entertainment gold! From the first episode, I was hooked."</p>
                                </blockquote>
                                <figcaption className="blockquote-footer pb-3">
                                    Emily Rodriguez, <cite title="Source Title">Frontline Report</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Landing;