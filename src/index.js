import "./styles.css";
import {addItemToDom, showNewItemForm} from "./newItemDom.js";
import {Project} from "./newProject.js";
import {showNewProjectForm} from "./newProjectDom.js";

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
    showNewProjectForm();
})



// add new list item to a project
newTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    showNewItemForm((data) => {
        addItem(
            data.title,
            data.description,
            data.checklist,
            data.dueDate,
            data.priority,
            data.project
        );
    });
})