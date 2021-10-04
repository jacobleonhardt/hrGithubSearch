import React, { useEffect } from 'react'
import './results.css'

const Results = ({ profile }) => {

    return (
        <section className="profile">
            <div className="left">
                <img src={profile.avatar_url} />
            </div>
            <div className="right">
                <h4>{profile.name}</h4>
                <h5><ion-icon name="logo-github"></ion-icon> {profile.login}</h5>
                <p><span className="profile-label"><ion-icon name="home-outline"></ion-icon></span> {profile.location}</p>
                <p><span className="profile-label"><ion-icon name="mail-outline"></ion-icon></span> {profile.email ? <span>{profile.email}</span>
                    : <span className="no-info">No Email Listed</span>}</p>
                <p><span className="profile-label"><ion-icon name="documents-outline"></ion-icon></span> {profile.public_repos}</p>
                {/* <p><span className="profile-label">Member Since:</span> {profile.created_at.slice(0,10)}</p>
                <p><span className="profile-label">Active On:</span> {profile.updated_at.slice(0,10)}</p> */}
            </div>
        </section>
    )
}

export default Results
