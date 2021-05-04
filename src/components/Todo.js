import React, {useState} from 'react';
import styled from 'styled-components'

const ItemDiv = styled.div`
p{
    display: flex;
    justify-content: center;
    margin: auto;
    font-size: x-large;
    font-family: Chalkduster, fantasy;
}
.completed p{
    color: red;
    text-decoration: line-through;
}
`

const Todo = (props) => {

    const handleClick = ()=> {
        props.toggleItem(props.item.id);
        console.log(props.item.completed)
    }

    return (
        <ItemDiv>
            <div onClick={handleClick} className={props.item.completed ? 'completed' : ''}>
                <p>{props.item.task}</p>
            </div>
        </ItemDiv>
    )
}

export default Todo;