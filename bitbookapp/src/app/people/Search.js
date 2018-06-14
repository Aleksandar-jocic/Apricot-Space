import React from 'react';

const Search = (props) => (

    <div id='inputDiv'>

        <div id='searchIconDiv'>
            <i class="fas fa-search"></i>
        </div>

        <input type='text' placeholder='   Search users...' onChange={props.inputMonitor} />

        <div id='cancelIconDiv'>
            <i class="fas fa-times"></i>
        </div>
    </div>

)
export default Search