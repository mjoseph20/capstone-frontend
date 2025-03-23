import React, { useEffect, useState } from "react";
import ShowListTile from "./ShowListTile";
import EpisodeListTile from "./EpisodeListTile";
import CastListTile from "./CastListTile";

function AllItems() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [showsResponse, episodesResponse, castMembersResponse] = await Promise.all([
                    fetch("http://localhost:8080/api/shows"),
                    fetch("http://localhost:8080/api/episodes"),
                    fetch("http://localhost:8080/api/cast-members")
                ]);

                const shows = await showsResponse.json();
                const episodes = await episodesResponse.json();
                const castMembers = await castMembersResponse.json();

                setItems([...shows, ...episodes, ...castMembers]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {items.map((item, index) => {
                if (item.type === "show") {
                    return <ShowListTile key={index} show={item} />;
                } else if (item.type === "episode") {
                    return <EpisodeListTile key={index} episode={item} />;
                } else {
                    return <CastListTile key={index} castMember={item} />;
                }
            })}
        </div>
    );
}

export default AllItems;