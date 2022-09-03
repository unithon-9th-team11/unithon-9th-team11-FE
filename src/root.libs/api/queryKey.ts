/* 로그인 API */

// login
export const API_LOGIN = '/users/login';

// join
export const API_JOIN = '/users/create';

/* TODO API */

// getTodos
export const API_GET_TODOS = '/todos';

// getTodosById
export const API_GET_TODO = (id: string) => `/todos/${id}`;

// createTodo
export const API_CREATE_TODO = '/todos';

// updateTodo
export const API_UPDATE_TODO = (id: string) => `/todos/${id}`;

// deleteTodo
export const API_DELETE_TODO = (id: string) => `/todos/${id}`;
