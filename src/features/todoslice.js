// features/todoslice.js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],  // Start with an empty array
        loading: false,
    },
    reducers: {
        getTodos: (state) => {
            state.loading = true; // Simulating loading
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            state.loading = false;
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed; // Toggle completed state
            }
        },
    },
});

export const { getTodos, addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
