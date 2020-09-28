import { combineReducers } from 'redux';

import { todoReducer } from './add-todo/add-todo.reducer';
import visibilityFilter from './visibilityFilter.reducer';


const rootReducer =  combineReducers({
    todo: todoReducer,
    visibilityFilter: visibilityFilter
})

export default rootReducer;