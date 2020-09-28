import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/add-todo/add-todo.action';

const ButtonAdd = ({addTodo}) => {
    let input

    return(
        <div className="buttonadd-main">
            <form class="form-inline" style={{width: 100+'%'}} 
            onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                addTodo(input.value)
                input.value = ''
                }} >
                <input type="text" class="form-control  mr-sm-2" id="inlineFormInputName2" placeholder="Type todo" ref= {node => (input = node)}></input>

                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}

// const mapStateToProps = ()
const mapDispatchToProps = dispatch => ({
    addTodo: (text) => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(ButtonAdd);