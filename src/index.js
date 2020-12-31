import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './style.css';
const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  const [color,setColor] = useState (true);
  return (
    <div style= {{background: color ? 'pink':'black'}} className='App'>
      <Typography className='h1' component='h1' variant='h2'>
        Todos
        <span>Get things done, one item at a time.</span>
      </Typography>

      <TodoForm
        colorf = {{color: 'red'}}
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <button onClick= {() => setColor(!color)}>cmm</button>
      {/* <button onClick= {setColor('black')}>cmm</button> */}

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
