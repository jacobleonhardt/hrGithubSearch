import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchContent } from '../../store/session'
import './searchbar.css'

const SearchBar = ({ setDirections }) => {

    const dispatch = useDispatch()
    const [searchType, setSearchType] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchContent(searchTerm))
        setDirections(false)
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
                        <input type="text" placeholder="Real Name"
                            onChange={e => setSearchTerm(e.target.value)}></input>
                    </label>:
                    <label>
                        <input type="email" placeholder="Email"
                            onChange={e => setSearchTerm(e.target.value)}></input>
                    </label>}
                </div>
                <div id="submit-button">
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
