import React from 'react';
import styled from 'styled-components'

const StyledForm = styled.form`
display: felx;
justify-content: center;
margin: atuo;
input {
  border-radius: 7px;
}
button {
  margin-top: 4%;
  background-color: lightblue;
}
`

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input:""
    }
  }

handleChanges = event => {
    this.setState({
        input: event.target.value
    });
    console.log(this.state.input)
};

handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.input);
    this.setState({input: ''})
}

render() {
    return (
        <StyledForm onSubmit={this.handleSubmit}>
            <input onChange={this.handleChanges} type='text' name='item' value={this.state.input} />
            <button>Add Todo</button>
        </StyledForm>
    )
}

}

export default TodoForm;