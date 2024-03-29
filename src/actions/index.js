// This file contains all the actions for the Todo list;
// This file also contains VisibilityFilters defines;

let nextTodoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id =>({
    type: 'TOGGLE_TODO',
    id
});

export const deleteTodo = id =>({
    type: 'DELETE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_DELETED: 'SHOW_DELETED',
};