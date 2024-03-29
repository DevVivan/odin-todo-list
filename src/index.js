import { Project } from './project';
import { Todo } from './todo';
import './assets/styles/style.css';
import { createProjectsWithDOM } from './dom';
import { createTodosWithDOM } from './dom';
import { createProjectOptionsInModal } from './dom';

let projects = [new Project('Inbox'), new Project('Completed'), new Project('Web Development')];
const newProjectForm = document.querySelector('.new-project-form');
const newTodoForm = document.querySelector('.new-todo-form');
const projectTabs = document.querySelector('.project-tabs');
const todoTabs = document.querySelector('.todo-tabs');
const newProjectModal = document.querySelector('.new-project-modal');
const newTodoModal = document.querySelector('.new-todo-modal');
const createTodoButton = document.querySelector('.create-todo-button');
const projectTab = document.querySelector('.project-tab');
const mainContainer = document.querySelector('.main-container');
let todoProjectOptions = document.querySelector('.todo-project-options');

export function createModalForms() {
    const newProjectButton = document.querySelector('.new-project-button');
    const closeProjectModalButton = document.querySelector('.close-project-modal');

    newProjectButton.addEventListener('click', () => {
        newProjectModal.showModal();
    });

    closeProjectModalButton.addEventListener('click', () => {
        newProjectModal.close();
    });

    const newTodoButton = document.querySelector('.new-todo-container');
    const closeTodoModalButton = document.querySelector('.close-todo-modal');

    newTodoButton.addEventListener('click', () => {
        newTodoModal.showModal();
    });

    closeTodoModalButton.addEventListener('click', () => {
        newTodoModal.close();
    });

    createTodoButton.addEventListener('click', () => {
        // Create todo and add to specific project's todos array.
    });
}

export function createProjects() {
    newProjectForm.addEventListener('submit', (event) => {
        newProjectModal.close();
        event.preventDefault();

        let projectName = document.getElementById("project-name").value;
        projects.push(new Project(projectName));

        projectTabs.innerHTML = '';
        createProjectsWithDOM(projects);
        todoProjectOptions.innerHTML = '';
        createProjectOptionsInModal(projects)

        let newProjectTab = document.querySelector(`[data-project="${projectName}"]`);
        if (newProjectTab) {
            newProjectTab.click();
        }
    });
}

export function createTodos() {
    newTodoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let todoTitle = document.getElementById("todo-title").value;
        let todoDescription = document.getElementById("todo-description").value;
        let todoDueDate = document.getElementById("todo-due-date").value;
        let todoPriority = document.getElementById("todo-priority").value;
        let todoProject = document.getElementById("todo-project").value;

        let activeProject = projects.find(project => project.isActive());
        let namedProject = projects.find(project => project.getName() === todoProject);
        namedProject.addTodo(new Todo(todoTitle, todoDescription, todoDueDate, todoPriority, todoProject));

        let projectTabToClick = document.querySelector(`.project-tab[data-project="${todoProject}"]`);
        if (projectTabToClick) {
            projectTabToClick.click();
        }

        projects[0].addTodo(new Todo(todoTitle, todoDescription, todoDueDate, todoPriority, todoProject));

        let activeProjectTodoTabs = mainContainer.querySelector('.todo-tabs');
        activeProjectTodoTabs.remove();
        createTodosWithDOM(activeProject, mainContainer);
        newTodoModal.close();   
    });
}

export function openEditTodoModal(todo, index) {
    const editTodoModal = document.querySelector('.edit-todo-modal');
    document.getElementById('edit-todo-title').value = todo.title;
    document.getElementById('edit-todo-description').value = todo.description;
    document.getElementById('edit-todo-due-date').value = todo.dueDate;
    document.getElementById('edit-todo-priority').value = todo.priority;
    editTodoModal.querySelector('.edit-todo-form').addEventListener('submit', (event) => {
        event.preventDefault();
        todo.title = document.getElementById('edit-todo-title').value;
        todo.description = document.getElementById('edit-todo-description').value;
        todo.dueDate = document.getElementById('edit-todo-due-date').value;
        todo.priority = document.getElementById('edit-todo-priority').value;
        editTodoModal.close();
        createTodosWithDOM(project, mainContainer);
    });
    editTodoModal.showModal();
}

createProjectOptionsInModal(projects)
createProjectsWithDOM(projects);
createModalForms();
createProjects();
createTodos();
