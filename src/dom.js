import { Project } from './project'
import { Todo } from './todo'
import './assets/styles/style.css'
import { createModalForms } from '.';

export function createContentUsingDOM(projects) {
    const projectTabs = document.querySelector('.project-tabs');
    
    projects.forEach(project => {
        const projectTab = document.createElement('div');
        projectTab.className = 'project-tab';
        
        const projectTitle = document.createElement('h3');
        projectTitle.className = 'project-sidebar-title';
        projectTitle.textContent = project.getName();
        
        projectTab.appendChild(projectTitle);
        projectTabs.appendChild(projectTab);

        projectTab.addEventListener('click', () => {
            let mainContainer = document.querySelector('.main-container');
            mainContainer.innerHTML = ''

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

            // remove the current-project classlist from all projects
            // whichever project was clicked, add the classlist of current-project to it
        })
    });
}