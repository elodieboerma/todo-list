import "./styles.css";
import {showNewItemForm, addItemToDom} from "./newItemDom.js";
import {Project} from "./newProject.js";
import {showNewProjectForm, addProjectToDom} from "./newProjectDom.js";

export let projectList = [];

const newTaskButton = document.getElementById("newTaskButton");
const newProjectButton = document.getElementById("newProjectButton");
const listContainer = document.getElementById("list");

const defaultProject = new Project("Important");
projectList.push(defaultProject);

const defaultProjectDiv = document.createElement("div");
defaultProjectDiv.id = "Important";
defaultProjectDiv.textContent = "Important";
defaultProjectDiv.classList.add("projectDiv");
listContainer.appendChild(defaultProjectDiv);



// add new project to list of projects
newProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    showNewProjectForm((data) => {
        addProjectToDom(data.projectName);
    });
})



// add new list item to a project
newTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    showNewItemForm((data) => {
        addItemToDom(
            data.title,
            data.description,
            data.checklist,
            data.dueDate,
            data.priority,
            data.project
        );
    });
})