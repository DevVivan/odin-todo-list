import { Project } from './project'
import { Todo } from './todo'
import './assets/styles/style.css'

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
            console.log('A project has been clicked.')
        })
    });
}