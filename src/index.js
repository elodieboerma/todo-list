import "./styles.css";
import addNew from "./newItem.js";
import addNewProject, {Project} from "./newProject.js";

export let projectList = [];

const create = document.getElementById("create");
const newProject = document.getElementById("newProject");
const listContainer = document.getElementById("list");

const defaultProject = new Project("Important");
projectList.push(defaultProject);

const defaultProjectDiv = document.createElement("div");
defaultProjectDiv.id = "Important";
defaultProjectDiv.textContent = "Important";
listContainer.appendChild(defaultProjectDiv);



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