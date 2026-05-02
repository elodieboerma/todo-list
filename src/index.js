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
projectList.push(defaultProject)
listContainer.appendChild(projectList);


// make a new project and add it to the list of projects
function makeNewProject() {
    let project = addNewProject();
    project.id = crypto.randomUUID();
    projectList.push(project);
}

newProject.addEventListener("click", (event) => {
    event.preventDefault();
    makeNewProject();
})


// add new list item to a project
function addItemToProject() {
    let listItem = addNew();
    listItem.id = crypto.randomUUID();
    project.push(listItem.project);
}

create.addEventListener("click", (event) => {
    event.preventDefault();
    addItemToProject();
})