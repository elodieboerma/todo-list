import {projectList} from "./index.js";

const form = document.getElementById("form");
const listContainer = document.getElementById("list");


class Project {
    constructor (projectName) {
        this.projectName = projectName;
        //array to store to-dos
        this.itemsArray = [];
    }

    get projectObject() {
        return {
            projectName: this.projectName,
            itemsArray: this.itemsArray,
        }
    }

        set projectObject({projectName}) {
            this.projectName = projectName;
            this.itemsArray = itemsArray;
        }
}


function addProjectToList(projectName) {
    let project = new Project(projectName);
    project.id = crypto.randomUUID();
    projectList.push(project);
    
    const projectDiv = document.createElement("div");
    projectDiv.id = projectName;
    projectDiv.textContent = projectName;
    const arrayDiv = document.createElement("div");
    arrayDiv.id = itemsArray;
    arrayDiv.textContent = project.itemsArray;
    listContainer.appendChild(projectDiv);
}




export default function () {

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
    addNewProject.id = "newProjectButton";
    addNewProject.name = "newProjectButton";
    addNewProject.value = "Create";
    form.append(box,addNewProject);

    addNewProject.addEventListener("click", function (event) {
        event.preventDefault();
        addProjectToList(input.value);
    });

}