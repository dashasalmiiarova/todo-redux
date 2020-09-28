import React from 'react';
import TodoListItem from '../TodoListItem/TodoLIstItem.component';

const TodoList = () => {
    return(
        <div className="jumbotron todo-list-main">
            <ul className="todo-list-ul list-group">
                    <TodoListItem  />
            </ul>
        </div>
    )
}



export default TodoList;