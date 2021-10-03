import React, { useEffect } from 'react'

const Results = ({ profile }) => {

    return (
        <div>
            <p>{profile.login}</p>
            <img src={profile.avatar_url} />
            <p>{profile.location}</p>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.public_repos}</p>
            <p>{profile.created_at}</p>
            <p>{profile.updated_at}</p>
        </div>
    )
}

export default Results
