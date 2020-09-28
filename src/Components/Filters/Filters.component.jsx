import React from 'react';
import FilterLink from './FilterLink';
import { VisibilityFilters } from '../../redux/add-todo/add-todo.action';

const Filters = () => {
    return(
    <div className="filters-main">
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_IMPORTANT}>Important</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Done</FilterLink>
         {/* <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary" onClick={() => {allTodo()}}>All</button>
                <button type="button" class="btn btn-secondary" onClick={() => {doneFilterTodo()}}>Done</button>
                <button type="button" class="btn btn-secondary" onClick={() => {importantFilterTodo()}}>Important</button>
            </div> */}
     </div>
    )
}

export default Filters;

