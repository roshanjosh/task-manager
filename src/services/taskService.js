import axios from 'axios';

const API_URL = 'https://dummyjson.com';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTasks = () => api.get('/todos');
export const getTask = (id) => api.get(`/todos/${id}`);
export const addTask = (task) => api.post('/todos/add', task);
export const updateTask = (id, task) => api.put(`/todos/${id}`, task);
export const deleteTask = (id) => api.delete(`/todos/${id}`);

export const transformTaskData = (apiTasks) => {
  const transformed = {
    todo: [],
    inProgress: [],
    completed: []
  };

  apiTasks.forEach(task => {
    const transformedTask = {
      id: task.id,
      title: task.todo,
      category: 'Landing Page UI',
      completed: task.completed,
      userId: task.userId,
      assignees: [task.userId],
      status: task.completed ? 'completed' : task.todo.includes('in progress') ? 'inProgress' : 'todo'
    };

    if (transformedTask.status === 'todo') transformed.todo.push(transformedTask);
    else if (transformedTask.status === 'inProgress') transformed.inProgress.push(transformedTask);
    else transformed.completed.push(transformedTask);
  });

  return transformed;
};