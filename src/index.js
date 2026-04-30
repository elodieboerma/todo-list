import "./styles.css";
import addNew from "./newItem.js";

export let projects = [];

const create = document.getElementById("create");

create.addEventListener("click", () => {
    let listItem = addNew();
    projects.appendChild(listItem);
})