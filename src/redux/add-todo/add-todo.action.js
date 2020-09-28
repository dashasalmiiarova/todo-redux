let nextId = 0;

export const addTodo = text => {
    return{
        type:'ADD_TODO',
        id: nextId++,
        text,
        important: false,
        done: false
    }
}

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const doneTodo = (todoIdDone) => {
    return{
        type: 'TODO_DONE',
        todoIdDone
    }
}

export const importantTodo = (todoIdImportant) => {
    return{
        type: 'IMPORTANT_TODO',
        todoIdImportant
    }
}

export const deleteTodo = (todoIdDelete) => {
    return {
        type: 'DELETE_TODO',
        todoIdDelete
    }
}

export const allTodo = () => {
    return{
        type: 'ALL_TODO'
    }
}

export const doneFilterTodo = () => {
    return{
        type: 'DONE_FILTER_TODO'
    }
}

export const importantFilterTodo = () => {
    return{
        type: 'IMPORTANT_FILTER_TODO'
    }
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_IMPORTANT: 'SHOW_IMPORTANT'
}