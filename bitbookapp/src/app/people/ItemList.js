import React from 'react';
import { Link } from "react-router-dom";

const ItemList = (props) => (

    <div className='singleItem'>
        <Link to={`/People/${props.item.id}`}>
            <div className='imageDiv'>
                <img src={props.item.avatarUrl} alt="userPhoto" />
            </div>

            <div className='nameAndDescriptionDiv'>
                <h3>{props.item.name}</h3>
                <p>{props.item.aboutShort}</p>
            </div>

            <div className='lastPostDiv'>
                <p>{props.date(props.item.lastPostDate)}</p>
            </div>
        </Link>
    </div>
)
export default ItemList