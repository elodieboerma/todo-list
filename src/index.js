import "./styles.css";
import addNew from "./newItem.js";
import addNewProject, {Project} from "./newProject.js";

export let projectList = [];

const newTask = document.getElementById("newTask");
const newProject = document.getElementById("newProject");
const listContainer = document.getElementById("list");

const defaultProject = new Project("Important");
projectList.push(defaultProject);

const defaultProjectDiv = document.createElement("div");
defaultProjectDiv.id = "Important";
defaultProjectDiv.textContent = "Important";
defaultProjectDiv.classList.add("projectDiv");
listContainer.appendChild(defaultProjectDiv);



// add new project to list of projects
newProject.addEventListener("click", (event) => {
    event.preventDefault();
    addNewProject();
})



// add new list item to a project
newTask.addEventListener("click", (event) => {
    event.preventDefault();
    addNew();
})