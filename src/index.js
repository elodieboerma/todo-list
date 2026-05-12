import "./styles.css";
import addNew from "./newItem.js";
import addNewProject, {Project} from "./newProject.js";

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
    addNewProject();
})



// add new list item to a project
newTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    addNew();
})