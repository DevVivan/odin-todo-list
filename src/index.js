import { Project } from './project'
import { Todo } from './todo'
import './assets/styles/style.css'
import { createContentUsingDOM } from './dom';

let projects = [new Project('Web Development'), new Project('School')];
const newProjectForm = document.querySelector('.new-project-form');
const newTodoForm = document.querySelector('.new-todo-form');
const projectTabs = document.querySelector('.project-tabs');
const newProjectModal = document.querySelector('.new-project-modal');
const newTodoModal = document.querySelector('.new-todo-modal');
const projectTab = document.querySelector('.project-tab');

export function createModalForms() {
    // Modal for new projects

    const newProjectButton = document.querySelector('.new-project-button');
    const closeProjectModalButton = document.querySelector('.close-project-modal');

    newProjectButton.addEventListener('click', () => {
        newProjectModal.showModal();
    })

    closeProjectModalButton.addEventListener('click', () => {
        newProjectModal.close();
    })

    // Modal for new todos

    const newTodoButton = document.querySelector('.new-todo-container');
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

export function createProjects() {
    newProjectForm.addEventListener('submit', (event) => {
        newProjectModal.close();
        event.preventDefault();
        let projectName = document.getElementById("project-name").value;
        projects.push(new Project(projectName))
        projectTabs.innerHTML = '';
        createContentUsingDOM(projects);
    })
}

export function createTodos() {
    newTodoForm.addEventListener('submit', (event) => {
        newTodoModal.close();
        event.preventDefault();
        let todoTitle = document.getElementById("todo-title").value;
        let todoDescription = document.getElementById("todo-description").value;
        let todoDueDate = document.getElementById("todo-due-date").value;
        let todoPriority = document.getElementById("todo-priority").value;
        let todoProject = document.getElementById("todo-project").value;

        let activeProject = projects.find(project => project.active);
        
        if (activeProject) {
            activeProject.addTodo(new Todo(todoTitle, todoDescription, todoDueDate, todoPriority, todoProject));
        }
        
        projectTabs.innerHTML = '';
        createContentUsingDOM(projects)
    })
}

projects[0].todos.push(new Todo('hi', 'hi'), new Todo('bye', 'bye'))
 
createModalForms()
createProjects()
createTodos()
createContentUsingDOM(projects);