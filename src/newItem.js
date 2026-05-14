import {projectList} from "./index.js";
import {addItemToDom} from "./newItemDom.js";



class Item {
    constructor (title,description,checklist,dueDate,priority/*,project*/) {
        this.title = title;
        this.description = description;
        this.checklist = checklist;
        this.dueDate = dueDate;
        this.priority = priority;
        //this.project = project;
        this.project;
    }

    get itemObject() {
        return {
            title: this.title,
            description: this.description,
            checklist: this.checklist,
            dueDate: this.dueDate,
            priority: this.priority,
            project: this.project,
        }
    }

    set itemObject({title,description,checklist,dueDate,priority/*,project*/}) {
        this.title = title;
        this.description = description;
        this.checklist = checklist;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
}



export let item;

// creates the item including putting it in the correct project
export function addItem(title,description,checklist,dueDate,priority,project) {
        item = new Item(title,description,checklist,dueDate,priority,project);
        item.id = crypto.randomUUID();
        // where "project" is the desired project in the list
        // search for project by name in projectList, if found then add to projectList
        let projectFound = projectList.find(p =>
            p.projectName === project
        );
        if (projectFound) {
            projectFound.itemsArray.push(item);
        };

}