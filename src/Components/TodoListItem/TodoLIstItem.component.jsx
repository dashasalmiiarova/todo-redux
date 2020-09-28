import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { doneTodo, importantTodo, deleteTodo } from '../../redux/add-todo/add-todo.action';

const TodoListItem = ({todos, doneTodo, importantTodo, deleteTodo}) => {
    // console.log(props);
    const element = todos.map(item => {
        let actual = "p-list";
        if(item.important){
            actual += " p-imp"
        } 
        if(item.done){
            actual += " p-done"
        } 

        return(
                <ul className="todo-list-ul list-group">
                    <li key={item.id} className="list-group-item d-flex align-items-center justify-content-between" >
                        <p className={ actual } onClick={() => doneTodo(item.id)}> { item.text } </p> 
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-success" onClick={() => importantTodo(item.id)}><i className="fas fa-star"></i></button>
                            <button type="button" className="btn btn-danger" onClick={() => deleteTodo(item.id)}><i className="fas fa-trash"></i></button>
                        </div>
                    </li>
                </ul>
        )
    })

    if (todos.length === 0){
        return (
            <h1>"You have nothing to do!"</h1>
        )
    } else{
        return(
            <div className="todo-list-item-main">
                <Fragment>
                    { element }
                </Fragment>
            </div>
        )
    }   
}

// const mapdispatchToProps = state => ({
    // todo: state.todo
// })


const mapDispatchToProps = dispatch => ({
    doneTodo: (todoIdDone) => dispatch(doneTodo(todoIdDone)),
    importantTodo: (todoIdImportant) => dispatch(importantTodo(todoIdImportant)),
    deleteTodo: (todoIdDelete) => dispatch(deleteTodo(todoIdDelete))
})

export default connect(null, mapDispatchToProps)(TodoListItem);