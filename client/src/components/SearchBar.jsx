import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const items = [
        { name: 'All Items', link: '/all' },
        { name: 'Shows', link: '/shows' },
        { name: 'Episodes', link: '/episodes' },
        { name: 'Cast Members', link: '/cast-members' }
    ];

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleFocus = () => {
        setDropdownVisible(true);
    }

    const handleBlur = () => {
        setDropdownVisible(false);
    }

    return (
        <div>
            <form className="d-flex" role="search">
                <Dropdown className="search-container me-2">
                    <Dropdown.Toggle className="btn btn-tertiary" variant="tertiary" id="dropdown-basic">
                        <input
                            className="form-control glyphicon glyphicon-search"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={{ width: "500px" }}
                        />
                    </Dropdown.Toggle>
                    {dropdownVisible && (
                        <Dropdown.Menu className="dropdown-menu-light show mx-auto z-3" style={{ maxHeight: "200px" }}>
                            {items.map((item, index) => (
                                <Dropdown.Item key={index}>
                                    <Link className='dropdown-item' to={`${item.link}`}>{item.name}</Link>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    )}
                </Dropdown>
            </form>
        </div>
    );
}

export default SearchBar;