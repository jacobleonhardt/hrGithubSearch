import React, { useState } from 'react'
import './searchbar.css'

const SearchBar = () => {
    const [searchType, setSearchType] = useState(false)

    const handleSubmit = (e, searchTerm) => {
        e.preventDefault()
        if(searchType) { // if searchType is true, then searchTerm is email

        }
    }

    const changeSearch = () => {
        setSearchType(!searchType)
    }

    return (
        <div id="searchbar">
            <form onSubmit={handleSubmit}>
                <div id="search-type">
                    Search by:
                    <label>
                        <input type="radio" id="name" name="name" checked={!searchType}
                        onChange={changeSearch}>
                        </input>
                        Name
                    </label>
                    <label>
                        <input type="radio" id="email" name="email" checked={searchType}
                        onChange={changeSearch}>
                        </input>
                        Email
                    </label>
                </div>
                <div id="search-field">
                {!searchType ?
                    <label>
                        <input type="text" placeholder="Real Name"></input>
                    </label>:
                    <label>
                        <input type="email" placeholder="Email"></input>
                    </label>}
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar
