import { connect } from 'react-redux';
import { VisibilityFilters } from '../../redux/add-todo/add-todo.action';
import TodoListItem from '../TodoListItem/TodoLIstItem.component';
// import { importantTodo, doneTodo, deleteTodo } from '../../redux/add-todo/add-todo.action';

const getVisibileTodos = (todos, filter) => {
    console.log(todos);
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_IMPORTANT:
            return todos.filter(t => t.important)
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.done)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibileTodos(state.todo, state.visibilityFilter)
})

// const mapDispatchToProps = dispatch => ({
//     importantTodo: id => dispatch(importantTodo(id)),
//     doneTodo: id => dispatch(doneTodo(id)),
//     deleteTodo: (todoIdDelete) => dispatch(deleteTodo(todoIdDelete))
// })

export default connect(mapStateToProps)(TodoListItem);
