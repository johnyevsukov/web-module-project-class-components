// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import styled from 'styled-components'

const ButtonDiv = styled.div`
display: flex;
justify-content: center;
margin: auto;
margin-top: 2%;
margin-bottom: 2%;

button {
    border-radius: 7px;
    width: 12vw;
    height: 4vh;
    font-size: medium;
    background-color: lightblue;
    margin-top: 4%;
    &:hover {
        transform: scale(1.1);
        transition: all .3s ease-in-out;
        background-color: #89d6fb;
        box-shadow: 10px 10px 8px #888888;
        color: #01303f;
      }
      transition: all .3s ease-in-out;
    }
}
}
`


const TodoList = props => {

    const handleClick = () => {
        props.clearCompleted();
    }

    return (
        <div>
            {
                props.todoList.map(item => (
                    <Todo key={item.id} toggleItem={props.toggleItem} item={item}/>
                ))
            }
            <ButtonDiv>
                <button onClick={handleClick}>Clear completed</button>
            </ButtonDiv>
        </div>
    )
}

export default TodoList;