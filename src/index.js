import "./styles.css";
import addNew from "./newItem.js";

export let projectList = [];

const create = document.getElementById("create");
const newProject = document.getElementById("newProject");
const defaultProject = document.getElementById("defaultProject");

function addItemToProject() {
    let listItem = addNew();
    listItem.id = crypto.randomUUID();
    project.push(listItem.project);
}

create.addEventListener("click", (event) => {
    event.preventDefault();
    addItemToProject();
})