import {projectList} from "./index.js";

const form = document.getElementById("form");
const listContainer = document.getElementById("list");


export default function () {
    class Project {
    constructor (projectName) {
        this.projectName = projectName;
    }

    get projectObject() {
        return {
            projectName: this.projectName,
        }
    }

        set projectObject({projectName}) {
            this.projectName = projectName;
        }
    }


    function addProjectToList(projectName) {
        let project = new Project(projectName);
        project.id = crypto.randomUUID();
        projectList.push(project);
        listContainer.appendChild(project);
    }


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