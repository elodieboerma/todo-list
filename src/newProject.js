import {projectList} from "./index.js";
import {addProjectToDom} from "./newProjectDom.js";



export class Project {

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



// creates the project
export function addProjectToList(projectName) {

    let project = new Project(projectName);
    project.id = crypto.randomUUID();
    projectList.push(project);

}