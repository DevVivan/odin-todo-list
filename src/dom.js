import { Project } from './project'
import { Todo } from './todo'
import './assets/styles/style.css'
import { createModalForms } from '.';

export function createContentUsingDOM(projects) {
    const projectTabs = document.querySelector('.project-tabs');
    const projectTabElements = projectTabs.querySelectorAll('.project-tab');
    const mainContainer = document.querySelector('.main-container');

    projects.forEach(project => {
        const projectTab = document.createElement('div');
        projectTab.className = 'project-tab';
        
        const projectTitle = document.createElement('h3');
        projectTitle.className = 'project-sidebar-title';
        projectTitle.textContent = project.getName();
        
        projectTab.appendChild(projectTitle);
        projectTabs.appendChild(projectTab);

        projectTab.addEventListener('click', (event) => {
            const clickedProjectTab = event.currentTarget;

            projectTabElements.forEach(tab => {
                tab.classList.remove('current-project');
            });

            clickedProjectTab.classList.add('current-project');

            const clickedProject = projects.find(p => p.getName() === project.getName())
            projects.forEach(otherProject => {
                if (otherProject.getName() !== clickedProject.getName()) {
                    otherProject.setActive(false)
                }
            });
            clickedProject.setActive(true);

            mainContainer.innerHTML = '';

            let contentHeaderContainer = document.createElement('div');
            contentHeaderContainer.classList.add('content-header-container')
            mainContainer.appendChild(contentHeaderContainer);

            let contentTitle = document.createElement('h1');
            contentTitle.classList.add('content-title')
            contentTitle.textContent = project.getName();
            contentHeaderContainer.appendChild(contentTitle);

            let newTodoContainer = document.createElement('div');
            newTodoContainer.classList.add('new-todo-container')
            contentHeaderContainer.appendChild(newTodoContainer);

            let newTodoIcon = document.createElement('i')
            newTodoIcon.classList.add('fa-solid')
            newTodoIcon.classList.add('fa-plus')
            newTodoIcon.classList.add('fa-lg')
            newTodoIcon.classList.add('fa-2x')
            newTodoIcon.classList.add('new-todo-button')
            newTodoContainer.appendChild(newTodoIcon);

            let contentHr = document.createElement('hr');
            contentHr.classList.add('content-hr')
            mainContainer.appendChild(contentHr);

            createModalForms();
            createTodos(project, mainContainer);
        });
    });
}

function createTodos(project, mainContainer) {
    const todoTabs = document.createElement('div');
    todoTabs.classList.add('todo-tabs');
    mainContainer.appendChild(todoTabs);

    project.todos.forEach(todo => {
        let todoTab = document.createElement('div');
        todoTab.classList.add('todo-tab');
        todoTabs.appendChild(todoTab);

        let todoContentLeft = document.createElement('div')
        todoContentLeft.classList.add('todo-content-left')
        todoTab.appendChild(todoContentLeft);

        let todoContentRight = document.createElement('div')
        todoContentRight.classList.add('todo-content-right')
        todoTab.appendChild(todoContentRight);

        let todoCompletedCheckbox = document.createElement('input');
        todoCompletedCheckbox.setAttribute('type', 'checkbox')
        todoCompletedCheckbox.setAttribute('name', 'todo-completed-checkbox')
        todoCompletedCheckbox.classList.add('todo-completed-checkbox')
        todoContentLeft.appendChild(todoCompletedCheckbox)   

        let todoTitle = document.createElement('p')
        todoTitle.classList.add('todo-title')
        todoTitle.classList.add('todo-info')
        todoTitle.textContent = todo.title;
        todoContentLeft.appendChild(todoTitle)

        let todoDueDate = document.createElement('p')
        todoDueDate.classList.add('todo-due-date')
        todoDueDate.classList.add('todo-info')
        todoDueDate.textContent = todo.dueDate;
        todoContentRight.appendChild(todoDueDate)

        let todoIcons = document.createElement('div')
        todoIcons.classList.add('todo-icons');
        todoContentRight.appendChild(todoIcons)

        let todoIconContainerEdit = document.createElement('div')
        todoIconContainerEdit.classList.add('todo-icon-container')
        todoIcons.appendChild(todoIconContainerEdit)

        let todoIconEdit = document.createElement('i')
        todoIconEdit.classList.add('fa-solid')
        todoIconEdit.classList.add('fa-pen-to-square')
        todoIconEdit.classList.add('todo-icon')
        todoIconContainerEdit.appendChild(todoIconEdit)

        let todoIconContainerDelete = document.createElement('div')
        todoIconContainerDelete.classList.add('todo-icon-container')
        todoIcons.appendChild(todoIconContainerDelete)

        let todoIconDelete = document.createElement('i')
        todoIconDelete.classList.add('fa-solid')
        todoIconDelete.classList.add('fa-trash-can')
        todoIconDelete.classList.add('todo-icon')
        todoIconContainerDelete.appendChild(todoIconDelete)
    });
}
