import "./styles.css";
import addNew from "./newItem.js";
import addNewProject from "./newProject.js";

export let projectList = [];

const create = document.getElementById("create");
const newProject = document.getElementById("newProject");
const listContainer = document.getElementById("list");

const defaultProject = document.createElement("div");
defaultProject.id = "defaultProject";
defaultProject.textContent = "Important";
listContainer.appendChild(defaultProject);



// add new project to list of projects
newProject.addEventListener("click", (event) => {
    event.preventDefault();
    addNewProject();
})



// add new list item to a project
create.addEventListener("click", (event) => {
    event.preventDefault();
    addNew();
})