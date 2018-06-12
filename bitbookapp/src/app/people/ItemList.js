import React from 'react';

const ItemList = (props) => (

    <div id='singleItem'>

        <div id='imageDiv'>
            <img src={props.item.avatarUrl} alt="userPhoto" />
        </div>

        <div id='nameAndDescriptionDiv'>
            <h3>{props.item.name}</h3>
            <p>short description</p>
        </div>
        
        <div id='lastPostDiv'>
            <p>Last post at 16:20</p>
        </div>

    </div>
)
export default ItemList