import React from 'react';

const NewPosts = (props) => (

    <div id='NewPosts'>

        <i class="fas fa-plus-circle"></i>

        <div id='contentButtons'>

            <div>
                <i onClick={props.newVideo} class="fas fa-circle"></i><span>video</span>

            </div>
            <div>
                <i onClick={props.newImage} class="fas fa-circle"></i><span>Image</span>
            </div>
            <div>
                <i onClick={props.newText} class="fas fa-circle"></i><span>Text</span>
            </div>

        </div>


    </div>
)
export default NewPosts