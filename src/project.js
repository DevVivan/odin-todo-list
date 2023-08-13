import { Todo } from "./todo";

export class Project{
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    getName() {
        return this.name;
    }

    addTodo(todo) {
        if (todo instanceof Todo) {
            this.todos.push(todo);
        }
    }
}