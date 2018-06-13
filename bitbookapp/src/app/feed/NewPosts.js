import React from 'react';

const NewPosts = (props) => (

    <div id='NewPosts'>

        <button><i class="fas fa-plus-circle"></i></button>

        <div id='contentButtons'>

            <div>
                <button onClick={props.newVideo} ><i class="fas fa-circle"></i><span>video</span></button>

            </div>
            <div>
                <button onClick={props.newImage} ><i class="fas fa-circle"></i><span>Image</span></button>
            </div>
            <div>
                <button onClick={props.newText} ><i class="fas fa-circle"></i><span>Text</span></button>
            </div>

        </div>


    </div>
)
export default NewPosts