import {projectList} from "./index.js";
import {addProjectToList} from "./newProject.js";

const listContainer = document.getElementById("list");



// create the form and directs its inputs to addProjectToList() to create the new project
export function showNewProjectForm(onSubmit,project=null) {

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
    input.value = project ? project.projectName : "";
    input.required = true;
    box.append(label,input);

    //button to create list item
    let addNewProject = document.createElement("input");
    addNewProject.type = "submit";
    addNewProject.id = "addNewProject";
    addNewProject.name = "addNewProject";
    addNewProject.value = project ? "Rename" : "Create";
    form.append(box,addNewProject);

    document.body.appendChild(form);
    input.focus();

    addNewProject.addEventListener("click", function (event) {
        event.preventDefault();

        const data = {
            projectName: input.value
        };

        onSubmit(data);

        form.remove();
    });

}





export function addProjectToDom(data) {

    addProjectToList(data.projectName);

    const projectDiv = document.createElement("div");
    projectDiv.id = data.projectName;
    projectDiv.classList.add("projectDiv");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("headerDiv");

    // separate title element
    const titleSpan = document.createElement("span");
    titleSpan.classList.add("projectTitle");
    titleSpan.textContent = data.projectName;

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttonDiv");

    addEditButton(data.projectName,buttonDiv,headerDiv,projectDiv);
    addDeleteButton(data.projectName,buttonDiv,headerDiv,projectDiv);

    headerDiv.append(titleSpan,buttonDiv);
    projectDiv.appendChild(headerDiv);

    listContainer.append(projectDiv);

}



function addEditButton(projectName,buttonDiv,headerDiv,projectDiv) {
    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.textContent = "Rename";
    buttonDiv.appendChild(editButton);

    editButton.addEventListener("click", (event) => {
        event.preventDefault();

        projectDiv.style.borderStyle = "dashed";

        const project = projectList.find(
            p => p.projectName === projectDiv.id
        );

        showNewProjectForm((data) => {
            project.projectName = data.projectName;

            projectDiv.id = data.projectName;

            const titleSpan = headerDiv.querySelector(".projectTitle");
            titleSpan.textContent = data.projectName;

            projectDiv.style.borderStyle = "solid";
        });
    });
}



function addDeleteButton(projectName,buttonDiv,headerDiv,projectDiv) {
    const deleteButton = document.createElement("div");
    deleteButton.id = "deleteButton";
    deleteButton.textContent = "⊗";
    deleteButton.style.marginLeft = "0.5rem";
    buttonDiv.appendChild(deleteButton);

    deleteButton.addEventListener("click", (event) => {
        event.preventDefault();
        const projectIndex = projectList.findIndex(
            p => p.projectName === projectName
        );
        projectList.splice(projectIndex, 1);
        projectDiv.remove();
        headerDiv.remove();
    })
}