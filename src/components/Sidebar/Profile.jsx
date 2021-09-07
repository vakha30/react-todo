import React from 'react'

function Profile({currentUser}) {
    return (
        <div className="profile">
            <div className="profile__img">
                <img src={currentUser.avatar} alt="" />
            </div>
            <div className="profile__info">
                <h2 className="profile__name">{currentUser.name}</h2>
                <p className="profile__proffesion">{currentUser.email}</p>
            </div>
        </div>
    )
}

export default Profile
