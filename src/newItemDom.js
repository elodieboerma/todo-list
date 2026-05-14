import {projectList} from "./index.js";
import {addItem, item} from "./newItem.js";



// create the form and give inputs to addNew() as arguments
export function showNewItemForm() {

    if (document.body.querySelector("form")) {
        return;
    }

    const col1 = document.createElement("div");
    col1.id = "col1";
    const col2 = document.createElement("div");
    col2.id = "col2";

    const inputFields = document.createElement("div");
    inputFields.id = "inputFields";

    const form = document.createElement("form");
    form.id = "newItemId";
    document.body.appendChild(form);

    // list item title
    let box1 = document.createElement("div");
    box1.id = "box1";
    let b1label = document.createElement("label");
    b1label.for = "title";
    b1label.textContent = "Title";
    let b1input = document.createElement("input");
    b1input.id = "title";
    b1input.name = "title";
    b1input.type = "text";
    b1input.required = true;
    box1.append(b1label,b1input);

    // list item description
    let box2 = document.createElement("div");
    box2.id = "box2";
    let b2label = document.createElement("label");
    b2label.for = "description";
    b2label.textContent = "Description";
    let b2input = document.createElement("textarea");
    b2input.id = "description";
    b2input.name = "description";
    box2.append(b2label,b2input);

    // list item checklist
    let box3 = document.createElement("div");
    box3.id = "box3";
    let b3label = document.createElement("label");
    b3label.for = "checklist";
    b3label.textContent = "Checklist";
    let b3input = document.createElement("textarea");
    b3input.id = "checklist";
    b3input.name = "checklist";
    box3.append(b3label,b3input);

    // list item due date
    let box4 = document.createElement("div");
    box4.id = "box4";
    let b4label = document.createElement("label");
    b4label.for = "dueDate";
    b4label.textContent = "Due date";
    let b4input = document.createElement("input");
    b4input.id = "dueDate";
    b4input.name = "dueDate";
    b4input.type = "date";
    b4input.required = true;
    box4.append(b4label,b4input);

    col1.append(box1,box2,box3,box4);

    // list item priority
    let box5 = document.createElement("div");
    box5.textContent = "Priority";
    box5.id = "box5";
    //asap
    let op1 = document.createElement("div");
    let input1 = document.createElement("input");
    input1.id = "asap";
    input1.name = "priority";
    input1.value = "asap";
    input1.type = "radio";
    let label1 = document.createElement("label");
    label1.for = "asap";
    label1.textContent = "ASAP";
    op1.append(input1,label1);
    //soon
    let op2 = document.createElement("div");
    let input2 = document.createElement("input");
    input2.id = "soon";
    input2.name = "priority";
    input2.value = "soon";
    input2.type = "radio";
    let label2 = document.createElement("label");
    label2.for = "soon";
    label2.textContent = "Soon";
    op2.append(input2,label2);
    //optional
    let op3 = document.createElement("div");
    let input3 = document.createElement("input");
    input3.id = "sometime";
    input3.name = "priority";
    input3.value = "sometime";
    input3.type = "radio";
    let label3 = document.createElement("label");
    label3.for = "sometime";
    label3.textContent = "Sometime";
    op3.append(input3,label3);
    box5.required = true;
    box5.append(op1,op2,op3);
    //need to change something here so the selected value is returned
    //let selectedPriority = box5.value;

    // project it should be in
    let box6 = document.createElement("div");
    box6.id = "box6";
    let b6label = document.createElement("label");
    b6label.for = "project";
    b6label.textContent = "Project";
    let b6input = document.createElement("select");
    b6input.id = "project";
    b6input.name = "project";
    b6input.required = true;
    // determines the project options in the dropdown
    for (let i in projectList) {
        let option = document.createElement("option");
        option.value = projectList[i].projectName;
        option.textContent = projectList[i].projectName;
        b6input.appendChild(option);
    };
    box6.append(b6label,b6input);

    col2.append(box5,box6);
    inputFields.append(col1,col2);

    //button to create list item
    let addNew = document.createElement("input");
    addNew.type = "submit";
    addNew.id = "addNewButton";
    addNew.name = "addNewButton";
    addNew.value = "Create";

    form.append(inputFields,addNew);

    addNew.addEventListener("click", function (event) {
        event.preventDefault();

        // assign value of selected radio button for item's priority
        const selectedPriority = form.querySelector(
        'input[name="priority"]:checked'
        )?.value;

        addItemToDom (
            b1input.value,
            b2input.value,
            b3input.value,
            b4input.value,
            selectedPriority,
            b6input.value
        );
        form.remove();
    });

}



// add item to dom tree
export function addItemToDom(title,description,checklist,dueDate,priority,project) {

    addItem(title,description,checklist,dueDate,priority,project);

    const itemDiv = document.createElement("div");
    itemDiv.id = title;
    itemDiv.textContent = title;
    itemDiv.classList.add("itemDiv");

    const itemDueDate = document.createElement("p");
    itemDueDate.id = dueDate;
    itemDueDate.textContent = dueDate;
    itemDiv.appendChild(itemDueDate);

    // get the project by project name property and then append the item to that project's itemsArray
    let projectDiv = document.getElementById(project);
    projectDiv.appendChild(itemDiv);


    // expand itemDiv when clicked
    itemDiv.addEventListener("click", (event) => {
        event.preventDefault();
        expandItemDiv(itemDiv,description,checklist,priority);
    });
}



// expand itemDiv to show details and editing options
export function expandItemDiv(itemDiv,description,checklist,priority) {

    const itemDescription = document.createElement("p");
    itemDescription.id = description;
    itemDescription.textContent = description;

    const itemChecklist = document.createElement("p");
    itemChecklist.id = checklist;
    itemChecklist.textContent = checklist;

    const itemPriority = document.createElement("p");
    itemPriority.id = priority;
    itemPriority.textContent = priority;

    //need to fix
    // button to edit task
    const editButton = document.createElement("button");
    editButton.id = "editButton";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", (event) => {
        event.preventDefault();
        const itemIndex = projectList.indexOf(item);
        showNewItemForm();
        // after form is filled out and submitted, update the item with the new values and update the 
        // dom tree
    })

    // button to delete task
    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteButton";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (event) => {
        event.preventDefault();
        const itemIndex = projectList.indexOf(item);
        let project = projectList.find(p => p.projectName === item.project);
        let index = project.itemsArray.findIndex(i => i.id === item.id);
        project.itemsArray.splice(index, 1);
        itemDiv.remove();
    })

    itemDiv.append(itemDescription,itemChecklist,itemPriority,editButton,deleteButton);

}