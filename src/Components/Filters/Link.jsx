import React from 'react';

const Link = ({ active, children, onClick }) =>(
    <button
        type="button" class="btn btn-secondary"
        onClick={onClick}
        disabled={active}
        style={{marginLeft: '4px'}}
    >
        {children}
    </button>
    // <button type="button" class="btn btn-secondary" onClick={() => {allTodo()}}>All</button>
) 


export default Link