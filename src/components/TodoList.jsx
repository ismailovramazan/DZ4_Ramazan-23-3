import {useSelector, useDispatch} from 'react-redux'
import classes from "./TodoList.module.css";
import { useEffect, useState } from 'react'
import {addTodo, deleteTodo, fetchTodos} from '../store/todoReducer.js'


const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])


    const inputTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const sendForm = () => {
        if (newTodo.trim() !== ''){
            dispatch(addTodo(newTodo))
            setNewTodo('')
        }
    }

    const clickDeleteTodo = (todo) => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <div>
            <h4>TodoList</h4>
            <input type="text"
                className={classes.input}
                onChange={inputTodo} value={newTodo}/>
            <button
                className={classes.Add}
                onClick={sendForm}>
            Добавить</button>

        <div>
          {todos && (
            <ul>
              {todos.map(t => (
                <li key={t.id}>
                    <button className={classes.delete}
                  onClick={() => clickDeleteTodo(t)}
                    >Delete<
                    /button>
                  {t.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
}
export default TodoList