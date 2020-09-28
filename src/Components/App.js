import React from 'react';

import ButtonAdd from './AddTodo/ButtonAdd.component';
import Filters from './Filters/Filters.component';
import VisibleTodoList from './TodoList/VisibleTodoList';

function App() {
  return (

    <div className="App-main" style={{width: 800+'px', margin: 'auto'}}>
      {/* <TodoList /> */}
      <div className="jumbotron">
        <VisibleTodoList />
      </div>
      
      <div className="d-flex align-items-center justify-content-between">
        <ButtonAdd />
        <Filters />
      </div>
      
    </div>
  );
}

export default App;
