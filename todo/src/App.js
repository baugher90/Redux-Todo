import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm/>
        <TodoList/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoOnProps: state.todo
  }
}

export default connect(mapStateToProps, {})(App);
