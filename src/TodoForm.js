import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

//const TodoForm = ({ saveTodo , ...props})
const TodoForm = ({ saveTodo , colorf,...props}) => {
  const { value, reset, onChange } = useInputState();
  //const {color} = props.colorf;
  const {color} = colorf;
  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}>
      <TextField
        style={{backgroundColor: color,opacity:0.5}}
        className='TextField'
        variant='outlined'
        placeholder='Add todo'
        margin='normal'
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
