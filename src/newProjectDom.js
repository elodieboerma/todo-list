import {projectList} from "./index.js";
import {addProjectToList} from "./newProject.js";

const listContainer = document.getElementById("list");



// create the form and directs its inputs to addProjectToList() to create the new project
export function showNewProjectForm() {

    if (document.body.querySelector("form")) {
        return;
    }

    const form = document.createElement("form");

    //project name
    let box = document.createElement("div");
    let label = document.createElement("label");
    label.for = "name";
    label.textContent = "Name";
    let input = document.createElement("input");
    input.id = "name";
    input.name = "name";
    input.type = "text";
    input.required = true;
    box.append(label,input);

    //button to create list item
    let addNewProject = document.createElement("input");
    addNewProject.type = "submit";
    addNewProject.id = "addNewProject";
    addNewProject.name = "addNewProject";
    addNewProject.value = "Create";
    form.append(box,addNewProject);

    document.body.appendChild(form);
    input.focus();

    addNewProject.addEventListener("click", function (event) {
        event.preventDefault();
        addProjectToDom(input.value);
        form.remove();
    });

}



export function addProjectToDom(projectName) {

    addProjectToList(projectName);

    const projectDiv = document.createElement("div");
    projectDiv.id = projectName;
    projectDiv.textContent = projectName;
    projectDiv.classList.add("projectDiv");
    listContainer.appendChild(projectDiv);

}