import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        return(
            <div>
                <h1>TodoList</h1>
                <TodoForm/>
                <Todo/>
            </div>
        )
    }
}

export default TodoList;