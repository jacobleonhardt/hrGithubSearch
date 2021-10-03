import React, { useState } from 'react'

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
                <label>
                    <input type="radio" id="name" name="name" checked={!searchType}
                    onChange={changeSearch}>
                    </input>
                    Search by Name
                </label>
                <label>
                    <input type="radio" id="email" name="email" checked={searchType}
                    onChange={changeSearch}>
                    </input>
                    Search by Email
                </label>
                {!searchType ?
                    <label>
                        <input type="text" placeholder="Real Name"></input>
                    </label>:
                    <label>
                        <input type="email" placeholder="Email"></input>
                    </label>}
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar
