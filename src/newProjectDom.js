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
    label.htmlFor = "name";
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
    projectDiv.classList.add("projectDiv");

    const headerDiv = document.createElement("div");
    headerDiv.textContent = projectName;
    headerDiv.style.display = "flex";
    addDeleteButton(projectName,headerDiv,projectDiv);
    projectDiv.appendChild(headerDiv);

    listContainer.append(projectDiv);

}

function addDeleteButton(projectName,headerDiv,projectDiv) {
    const deleteButton = document.createElement("div");
    deleteButton.id = "deleteButton";
    deleteButton.textContent = "⊗";
    deleteButton.style.marginLeft = "0.5rem";
    headerDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", (event) => {
        event.preventDefault();
        const projectIndex = projectList.indexOf(projectName);
        projectList.splice(projectIndex, 1);
        projectDiv.remove();
        deleteButton.remove();
    })
}