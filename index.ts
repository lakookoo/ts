import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get<Todo>(url).then(response => {
    const todo = response.data;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
})

const logTodo = (id: number, title: string, completed: boolean): void => {
    console.log(`
    The todo with ID: ${id}
    Has a title: ${title}
    Is completed: ${completed}
    `);
}