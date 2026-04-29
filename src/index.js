import "./styles.css";
import addNew from "./newItem.js";

const create = document.getElementById("create");

create.addEventListener("click", () => {
    addNew();
})