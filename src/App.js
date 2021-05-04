import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const StyledApp = styled.div`
padding: 3%;
border: 4px lightblue outset;
border-radius: 7px;
width: 50vw;
justify-content: center;
margin: auto;
margin-top: 10%;
background-color: #d4f0fc;
background: linear-gradient(-45deg, #d4f0fc, #02a9f7, #e9ebee);
background-size: 400% 400%;
animation: gradient 8s ease infinite;
@keyframes gradient {
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
  }
  100% {
      background-position: 0% 50%;
  }
}
h2 {
  font-size: xx-large;
  display: flex;
  justify-content: center;
  font-family: Impact, fantasy;
}
`

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todoList
    }
  }

  toggleItem = (id) => {
    const newToDoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return (item);
      }
    });

    this.setState({
      todoList: newToDoList
    });
  }

  addItem = (title) => {
    const newItem = {
      task:title,
      id:this.state.todoList.length,
      completed: false
    };
    
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }

  clearCompleted = () => {
    const newToDoList = this.state.todoList.filter(item => {
      return(item.completed === false);
    });

    this.setState({
      todoList: newToDoList
    })
  }

  render() {
    return (
      <StyledApp>
        <div>
          <div>
            <h2>Welcome to your Todo App!</h2>
            <TodoList clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} todoList={this.state.todoList} />
          </div>
          <TodoForm addItem={this.addItem}/>
        </div>
      </StyledApp>
    );
  }
}

export default App;
