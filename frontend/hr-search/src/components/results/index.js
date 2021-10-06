import React from 'react'
import './results.css'

const Results = ({ profile, email }) => {

    const openProfile = () => {
        window.open(profile.html_url, '_blank')
    }

    console.log('###########', profile)

    return (
        <section className="profile">
            <div className="left">
                <img src={profile.avatar_url} />
            </div>
            <div className="right">
                <h4>{profile.name ? <>{profile.name}</> : <>Name Not Available</>}</h4>
                <h5><span className="profile-label text">aka:</span> {profile.login}</h5>
                <p><span className="profile-label"><ion-icon name="home-outline"></ion-icon></span>
                    {profile.location ? <span>{profile.location}</span>
                    : <span className="no-info">Location Not Available</span>}</p>
                <p><span className="profile-label"><ion-icon name="mail-outline"></ion-icon></span>
                    {email ? <span>{email}</span>
                    : <span className="no-info">Email Not Available</span>}</p>
                <p><span className="profile-label"><ion-icon name="folder-outline"></ion-icon></span>
                    {profile.public_repos ? <>{profile.public_repos}</> : <>Public Repos Not Available</>}</p>
                <p><span className="profile-label"><ion-icon name="person-add-outline"></ion-icon></span>
                    {profile.created_at ? <>{profile.created_at.slice(0,10)}</> : <>Creation Date Not Available</>}</p>
                <p><span className="profile-label"><ion-icon name="pulse-outline"></ion-icon></span>
                    {profile.updated_at ? <>{profile.updated_at.slice(0,10)}</> : <>Last Update Not Available</>}</p>
                <button className="profile-button" onClick={openProfile}><ion-icon name="logo-github"></ion-icon> View Profile</button>
            </div>
        </section>
    )
}

export default Results
