import { Project } from './project'
import { Todo } from './todo'
import './assets/styles/style.css'

const newProjectButton = document.querySelector('.new-project-button');
const newProjectModal = document.querySelector('.new-project-modal');

export function showProjectModal() {
    newProjectButton.addEventListener('click', () => {
        newProjectModal.showModal()
    })
}