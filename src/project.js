import { Todo } from "./todo";

export class Project{
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() {
        return this.name;
    }
}