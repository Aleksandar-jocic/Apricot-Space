import React from 'react';

const NewPosts = (props) => (

    <div id='NewPosts'>

        <i class="fas fa-plus-circle"></i>

        <div id='contentButtons'>

                <i onClick={props.newVideo} class="fas fa-video"></i>
                <i onClick={props.newImage} class="fas fa-camera"></i>
                <i onClick={props.newText} class="far fa-comment"></i>

        </div>


    </div>
)
export default NewPosts