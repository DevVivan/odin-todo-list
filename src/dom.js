import { Project } from './project';
import { Todo } from './todo';
import './assets/styles/style.css';
import { createModalForms } from '.';

export function createProjectsWithDOM(projects) {
    const projectTabs = document.querySelector('.project-tabs');
    const defaultTabs = document.querySelector('.default-tabs');
    const mainContainer = document.querySelector('.main-container');

    defaultTabs.innerHTML = '';

    for (let i = 0; i < 2; i++) {
        const projectTab = document.createElement('div');
        projectTab.className = 'project-tab';

        const projectTitle = document.createElement('h3');
        projectTitle.className = 'project-sidebar-title';
        projectTitle.textContent = projects[i].getName();

        projectTab.appendChild(projectTitle);
        defaultTabs.appendChild(projectTab);

        projectTab.addEventListener('click', () => {
            projectTabs.querySelectorAll('.project-tab').forEach(tab => {
                tab.classList.remove('current-project', 'active');
            });

            defaultTabs.querySelectorAll('.project-tab').forEach(tab => {
                tab.classList.remove('current-project', 'active');
            });

            projectTab.classList.add('current-project', 'active');

            projects.forEach(otherProject => {
                if (otherProject !== projects[i]) {
                    otherProject.setActive(false);
                }
            });
            projects[i].setActive(true);

            mainContainer.innerHTML = '';

            let contentHeaderContainer = document.createElement('div');
            contentHeaderContainer.classList.add('content-header-container');
            mainContainer.appendChild(contentHeaderContainer);

            let contentTitle = document.createElement('h1');
            contentTitle.classList.add('content-title');
            contentTitle.textContent = projects[i].getName();
            contentHeaderContainer.appendChild(contentTitle);

            let newTodoContainer = document.createElement('div');
            newTodoContainer.classList.add('new-todo-container');
            contentHeaderContainer.appendChild(newTodoContainer);

            let newTodoIcon = document.createElement('i');
            newTodoIcon.classList.add('fa-solid', 'fa-plus', 'fa-lg', 'fa-2x', 'new-todo-button');
            newTodoContainer.appendChild(newTodoIcon);

            let contentHr = document.createElement('hr');
            contentHr.classList.add('content-hr');
            mainContainer.appendChild(contentHr);

            createModalForms();
            createTodosWithDOM(projects[i], mainContainer);
        });
    }

    projects.forEach(project => {
        if (project.getName() !== 'Inbox' && project.getName() !== 'Completed') {
            const projectTab = document.createElement('div');
            projectTab.className = 'project-tab';
            
            const projectTitle = document.createElement('h3');
            projectTitle.className = 'project-sidebar-title';
            projectTitle.textContent = project.getName();
            
            projectTab.appendChild(projectTitle);
            projectTabs.appendChild(projectTab);
    
            projectTab.addEventListener('click', () => {
                projectTabs.querySelectorAll('.project-tab').forEach(tab => {
                    tab.classList.remove('current-project', 'active');
                });

                defaultTabs.querySelectorAll('.project-tab').forEach(tab => {
                    tab.classList.remove('current-project', 'active');
                });
            
                projectTab.classList.add('current-project', 'active');
    
                projects.forEach(otherProject => {
                    if (otherProject !== project) {
                        otherProject.setActive(false);
                    }
                });
                project.setActive(true);
    
                mainContainer.innerHTML = '';
    
                let contentHeaderContainer = document.createElement('div');
                contentHeaderContainer.classList.add('content-header-container');
                mainContainer.appendChild(contentHeaderContainer);
    
                let contentTitle = document.createElement('h1');
                contentTitle.classList.add('content-title');
                contentTitle.textContent = project.getName();
                contentHeaderContainer.appendChild(contentTitle);
    
                let newTodoContainer = document.createElement('div');
                newTodoContainer.classList.add('new-todo-container');
                contentHeaderContainer.appendChild(newTodoContainer);
    
                let newTodoIcon = document.createElement('i');
                newTodoIcon.classList.add('fa-solid', 'fa-plus', 'fa-lg', 'fa-2x', 'new-todo-button');
                newTodoContainer.appendChild(newTodoIcon);
    
                let contentHr = document.createElement('hr');
                contentHr.classList.add('content-hr');
                mainContainer.appendChild(contentHr);

                createModalForms();
                createTodosWithDOM(project, mainContainer);
            });
        }

        window.onload = function makeInboxProjectActive() {
            const projectTabs = document.querySelectorAll('.project-tab');
            for (const projectTab of projectTabs) {
                const projectName = projectTab.querySelector('.project-sidebar-title').textContent;        
                if (projectName === 'Inbox') {
                    projectTab.classList.add('current-project', 'active');
                    projectTab.click();
                    break;
                }
            }
        }
    });
}

export function createTodosWithDOM(project, mainContainer) {
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
        todoIconEdit.classList.add('fa-solid', 'fa-pen-to-square', 'todo-icon');
        todoIconContainerEdit.appendChild(todoIconEdit)

        let todoIconContainerDelete = document.createElement('div')
        todoIconContainerDelete.classList.add('todo-icon-container')
        todoIcons.appendChild(todoIconContainerDelete)

        let todoIconDelete = document.createElement('i')
        todoIconDelete.classList.add('fa-solid', 'fa-trash-can', 'todo-icon');
        todoIconContainerDelete.appendChild(todoIconDelete)
    });
}

export function createProjectOptionsInModal(projects) {
    let todoProjectOptions = document.querySelector('.todo-project-options');
    
    const filteredProjects = projects.filter(project => project.getName() !== 'Inbox' && project.getName() !== 'Completed');

    filteredProjects.forEach(project => {
        let projectOption = document.createElement('option');
        projectOption.setAttribute('value', project.getName())
        projectOption.textContent = project.getName()
        todoProjectOptions.appendChild(projectOption)
    })
}
