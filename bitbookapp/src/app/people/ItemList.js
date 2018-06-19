import React from 'react';
import { Link } from "react-router-dom";

const ItemList = ({ item: {
    id,
    avatarUrl,
    name,
    aboutShort,
    lastPostDate
} = {}, date }) => (

        <div className='singleItem'>
            <Link to={`/People/${id}`}>
                <div className='imageDiv'>
                    <img src={avatarUrl} alt="userPhoto" />
                </div>

                <div className='nameAndDescriptionDiv'>
                    <h3>{name}</h3>
                    <p>{aboutShort}</p>
                </div>

                <div className='lastPostDiv'>
                    <p>{date(lastPostDate)}</p>
                </div>
            </Link>
        </div>
    )
export default ItemList

