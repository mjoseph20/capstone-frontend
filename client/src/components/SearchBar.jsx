import React, { useState } from 'react';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="input-group m-2">
            <input
                className="form-control"
                list='datalistOptions'
                type="text"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
               width={"100px"}
            />
            <datalist id='datalistOptions'>
                <option value="The Office"></option>
                <option value="Parks and Recreation"></option>
                <option value="Brooklyn Nine-Nine"></option>
                <option value="Friends"></option>
                <option value="The Simpsons"></option>
                <option value="The Good Place"></option>
                <option value="The Mandalorian"></option>
                <option value="Stranger Things"></option>
                <option value="The Crown"></option>
                <option value="The Witcher"></option>
                <option value="The Umbrella Academy"></option>
                <option value="The Queen's Gambit"></option>
                <option value="Breaking Bad"></option>
            </datalist>
        </div>
    );
}

export default SearchBar;