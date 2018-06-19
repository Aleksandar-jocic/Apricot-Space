import React from 'react';

const Profile = ({ userId, handleEditProfile, profile }) => (

    <div>
        <img src={profile.avatarUrl} alt="userPhoto" />

        <h1>{profile.name}</h1>

        {(userId === undefined) ? (

            <button id='editProfileButton' onClick={handleEditProfile} >Edit profile</button>

        ) : undefined}

        <p>{profile.about}</p>

        <div id='postsAndCommentsDiv'>
            <div id='PostsDiv'>
                <div><span>P</span></div>
                <h4> {profile.postsCount} posts  </h4>
            </div>
            <div id='CommentsDiv'>
                <div><span>C</span></div>
                <h4> {profile.commentsCount} comments</h4>
            </div>
        </div>
    </div>
)

export default Profile
