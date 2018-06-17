import React from 'react';

const ProfileExtension = (props) => (

    <div>
        <img src={props.profile.avatarUrl} alt="userPhoto" />

        <h1>{props.profile.name}</h1>

        {(props.params.userId === undefined) ? (

            <button id='editProfileButton' onClick={props.handler} >Edit profile</button>

        ) : ('')}

        <p>{props.profile.about}</p>

        <div id='postsAndCommentsDiv'>
            <div id='PostsDiv'>
                <div><span>P</span></div>
                <h4> {props.profile.postsCount} posts  </h4>
            </div>
            <div id='CommentsDiv'>
                <div><span>C</span></div>
                <h4> {props.profile.commentsCount} comments</h4>
            </div>
        </div>
    </div>
)

export default ProfileExtension
