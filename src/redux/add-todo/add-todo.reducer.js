const INITIAL_STATE = [];
export const todoReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case 'ADD_TODO':
            return[
                ...state, {
                    id: action.id,
                    text: action.text,
                    done: action.done,
                    important: action.important
                }
            ]
        case 'TODO_DONE':
            return state.map(item => item.id === action.todoIdDone ? {...item, done: !item.done} : item)

        case 'IMPORTANT_TODO':
            return state.map(item => item.id === action.todoIdImportant ? {...item, important: !item.important} : item)
        case 'DELETE_TODO':
            // return state.splice(action.todoIdDelete, 1);
            return state.filter(item => item.id !== action.todoIdDelete)
        case 'ALL_TODO':
            return state.todo
        case 'DONE_FILTER_TODO':
            return state.filter(item => item.done === true)

        case 'IMPORTANT_FILTER_TODO':
            return state.filter(item => item.important === true)
        default:
            return state
    }
}
