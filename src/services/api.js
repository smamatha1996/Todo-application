import axios from 'axios';

const MOCK_API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => axios.get(MOCK_API_URL);
export const addTodoAPI = (text) => axios.post(MOCK_API_URL, { title: text, completed: false });
export const deleteTodoAPI = (id) => axios.delete(`${MOCK_API_URL}/${id}`);
export const toggleTodoAPI = (id) =>
  axios.patch(`${MOCK_API_URL}/${id}`, (todo) => ({ completed: !todo.completed }));
