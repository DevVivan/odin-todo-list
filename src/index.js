import { Project } from './project'
import { Todo } from './todo'
import './assets/styles/style.css'
import { createContentUsingDOM } from './dom';

let projects = [new Project('Web Development')];

export function createModalForms() {
    // Modal for new projects

    const newProjectButton = document.querySelector('.new-project-button');
    const newProjectModal = document.querySelector('.new-project-modal');
    const newProjectForm = document.querySelector('.new-project-form');
    const closeProjectModalButton = document.querySelector('.close-project-modal');
    const projectTabs = document.querySelector('.project-tabs');

    newProjectButton.addEventListener('click', () => {
        newProjectModal.showModal();
    })

    closeProjectModalButton.addEventListener('click', () => {
        newProjectModal.close();
    })

    newProjectForm.addEventListener('submit', (event) => {
        newProjectModal.close();
        event.preventDefault();
        let projectName = document.getElementById("project-name");
        projectName = projectName.value;
        projects.push(new Project(projectName))
        projectTabs.innerHTML = '';
        createContentUsingDOM(projects);
    })

    // Modal for new todos

    const newTodoButton = document.querySelector('.new-todo-container');
    const newTodoModal = document.querySelector('.new-todo-modal');
    const closeTodoModalButton = document.querySelector('.close-todo-modal');
    const createTodoButton = document.querySelector('.create-todo-button');

    newTodoButton.addEventListener('click', () => {
        newTodoModal.showModal()
    })

    closeTodoModalButton.addEventListener('click', () => {
        newTodoModal.close();
    })

    createTodoButton.addEventListener('click', () => {
        // create todo and add to specific projects todos array.
    })
}

createModalForms()
createContentUsingDOM(projects);