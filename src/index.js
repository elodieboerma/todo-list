import "./styles.css";
import addNew from "./newItem.js";

export let projects = [];

const create = document.getElementById("create");

function addItemToProject() {
    let listItem = addNew();
    listItem.id = crypto.randomUUID();
    projects.push(listItem);
}

create.addEventListener("click", (event) => {
    event.preventDefault();
    addItemToProject();
})