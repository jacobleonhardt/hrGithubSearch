import React, { useEffect } from 'react'
import './results.css'

const Results = ({ profile }) => {

    return (
        <section className="profile">
            <div className="left">
                <img src={profile.avatar_url} />
            </div>
            <div className="right">
                <h3>{profile.name} ({profile.login})</h3>
                <p>{profile.location}</p>
                {profile.email ? <p>{profile.email}</p>
                    : <span className="no-info">No email listed.</span>}
                <p>Public Repos: {profile.public_repos}</p>
                <p>Member Since: {profile.created_at.slice(0,10)}</p>
                <p>Active On: {profile.updated_at.slice(0,10)}</p>
            </div>
        </section>
    )
}

export default Results
