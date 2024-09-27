
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todoslice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
