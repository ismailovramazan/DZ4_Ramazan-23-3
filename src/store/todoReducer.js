import axios from "axios"

const initialState = {
    todos: []
}

const todoReducer = (state=initialState, action) => {
    if (action.type == 'ADD_TODO') {
        return {...state, 
            todos: [...state.todos, action.payload]}
    }
    else if (action.type == 'REMOVE_TODO') {
  const updatedTodos = state.todos.filter(t => t.id !== action.payload);
  return {
    ...state,
    todos: updatedTodos
  };
}
    else if (action.type == 'SET_TODOS') {
        return {...state, todos: action.payload}
    }
    return state
}

export const fetchTodos = () => {
    return  async (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(
                resp => dispatch({type: 'SET_TODOS', payload: resp.data})
            )
    }
}


export const addTodo = payload => ({type: "ADD_TODO", payload})
export const deleteTodo = payload => ({type: "REMOVE_TODO", payload})
export default todoReducer