import { Project } from './project'
import { Todo } from './todo'
import './assets/styles/style.css'

export function createModalForms() {
    // Modal for new projects

    const newProjectButton = document.querySelector('.new-project-button');
    const newProjectModal = document.querySelector('.new-project-modal');

    newProjectButton.addEventListener('click', () => {
        newProjectModal.showModal()
    })

    // Modal for new todos

    const newTodoButton = document.querySelector('.new-todo-container');
    const newTodoModal = document.querySelector('.new-todo-modal');

    newTodoButton.addEventListener('click', () => {
        newTodoModal.showModal()
    })

}