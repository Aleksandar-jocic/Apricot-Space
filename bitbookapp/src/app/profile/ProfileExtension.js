import React from 'react';

const ProfileExtension = (props) => (

    <div>
        <img src={props.profile.avatarUrl} alt="userPhoto" />

        <h1>{props.profile.name}</h1>

        {(props.params.userId === undefined) ? (

            <span onClick={props.handler} >edit profile</span>

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
