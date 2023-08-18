import { Todo } from "./todo";

export class Project{
    constructor(name) {
        this.name = name;
        this.todos = [];
        this.active = false;
    }

    getName() {
        return this.name;
    }

    addTodo(todo) {
        if (todo instanceof Todo) {
            this.todos.push(todo);
        }
    }

    setActive(isActive) {
        this.active = isActive;
    }

    isActive() {
        return this.active;
    }
}