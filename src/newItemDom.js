import {projectList} from "./index.js";
import {addItem, item} from "./newItem.js";



// create the form and give inputs to addNew() as arguments
export function showNewItemForm(onSubmit, item=null) {

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


    // list item title
    let box1 = document.createElement("div");
    box1.id = "box1";
    let b1label = document.createElement("label");
    b1label.htmlFor = "title";
    b1label.textContent = "Title";
    let b1input = document.createElement("input");
    // ternary operator -- if item exists, b1input = item's title, otherwise it remains empty
    b1input.value = item ? item.title : "";
    b1input.id = "title";
    b1input.name = "title";
    b1input.type = "text";
    b1input.required = true;
    box1.append(b1label,b1input);

    // list item description
    let box2 = document.createElement("div");
    box2.id = "box2";
    let b2label = document.createElement("label");
    b2label.htmlFor = "description";
    b2label.textContent = "Description";
    let b2input = document.createElement("textarea");
    b2input.value = item ? item.description : "";
    b2input.id = "description";
    b2input.name = "description";
    box2.append(b2label,b2input);

    // list item checklist
    let box3 = document.createElement("div");
    box3.id = "box3";
    let b3label = document.createElement("label");
    b3label.htmlFor = "checklist";
    b3label.textContent = "Checklist";
    let b3input = document.createElement("textarea");
    b3input.value = item ? item.checklist : "";
    b3input.id = "checklist";
    b3input.name = "checklist";
    box3.append(b3label,b3input);

    // list item due date
    let box4 = document.createElement("div");
    box4.id = "box4";
    let b4label = document.createElement("label");
    b4label.htmlFor = "dueDate";
    b4label.textContent = "Due date";
    let b4input = document.createElement("input");
    b4input.value = item ? item.dueDate : "";
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
    label1.htmlFor = "asap";
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
    label2.htmlFor = "soon";
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
    label3.htmlFor = "sometime";
    label3.textContent = "Sometime";
    op3.append(input3,label3);
    box5.required = true;
    box5.append(op1,op2,op3);
    // for editing an item -- if item exists, then check the radio button that matches the item's priority
    if (item) {
        // find the "priority" attirbute of the item
        const selected = item.priority;
        // find the value of the "priority" attribute
        const radio = box5.querySelector(
            `input[name="priority"][value="${selected}"]`
        );
        // if "priority" has a value, check the corresponding radio button
        if (radio) { 
            radio.checked = true;
        }
    }


    // project it should be in
    let box6 = document.createElement("div");
    box6.id = "box6";
    let b6label = document.createElement("label");
    b6label.htmlFor = "project";
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
    b6input.value = item ? item.project : projectList[0].projectName;

    col2.append(box5,box6);
    inputFields.append(col1,col2);

    //button to create list item
    let addNew = document.createElement("input");
    addNew.type = "submit";
    addNew.id = "addNewButton";
    addNew.name = "addNewButton";
    addNew.value = "Create";

    form.append(inputFields,addNew);
    document.body.appendChild(form);
    b1input.focus();

    addNew.addEventListener("click", function (event) {
        event.preventDefault();

        // assign value of selected radio button for item's priority
        // if checked assign the checked value
        let selectedPriority =
            form.querySelector('input[name="priority"]:checked')?.value;

        let data = {
            title: b1input.value,
            description: b2input.value,
            checklist: b3input.value,
            dueDate: b4input.value,
            priority: selectedPriority,
            project: b6input.value
        };

        onSubmit(data);
        form.remove();
    });

}



// add item to dom tree
export function addItemToDom(title,description,checklist,dueDate,priority,project) {

    addItem(title,description,checklist,dueDate,priority,project);

    const container = document.createElement("div");
    container.id = "container";

    // box to check off task when complete
    let checkbox = document.createElement("input");
    checkbox.id = "checkbox";
    checkbox.name = "checkbox";
    checkbox.type = "checkbox";

    const itemDiv = document.createElement("div");
    itemDiv.id = "itemDiv";
    itemDiv.textContent = "itemDiv";
    itemDiv.classList.add("itemDiv");

    const itemTitle = document.createElement("p");
    itemTitle.id = title;
    itemTitle.textContent = title;
    itemDiv.appendChild(itemTitle);

    const itemDueDate = document.createElement("p");
    itemDueDate.id = dueDate;
    itemDueDate.textContent = dueDate;
    itemDiv.appendChild(itemDueDate);

    if (priority == "asap") {
        itemDiv.classList.add("asap");
    } else if (priority == "soon") {
        itemDiv.classList.add("soon");
    }

    const expandArrow = document.createElement("div");
    expandArrow.id = "expandArrow";
    expandArrow.textContent = ">>";
    itemDiv.appendChild(expandArrow);

    container.append(checkbox,itemDiv);

    // get the project by project name property and then append the item to that project's itemsArray
    let projectDiv = document.getElementById(project);
    projectDiv.append(container);

    // expand itemDiv when expandArrow is clicked
    expandArrow.addEventListener("click", (event) => {
        event.preventDefault();
        expandItemDiv(itemDiv,description,checklist,itemDueDate,priority);
    });
}



// expand itemDiv to show details and editing options
export function expandItemDiv(itemDiv,description,checklist,itemDueDate,priority) {

    const itemDescription = document.createElement("p");
    itemDescription.id = description;
    itemDescription.textContent = description;

    const itemChecklist = document.createElement("p");
    itemChecklist.id = checklist;
    itemChecklist.textContent = checklist;

    const itemPriority = document.createElement("p");
    itemPriority.id = priority;
    itemPriority.textContent = priority;


    // button to edit task
    const editButton = document.createElement("button");
    editButton.id = "editButton";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", (event) => {
        event.preventDefault();

        const itemIndex = projectList.indexOf(item);
        itemDiv.style.backgroundColor = "lightgray";
        
        showNewItemForm((data) => {

            // update the item in memory
            item.title = data.title;
            item.description = data.description;
            item.checklist = data.checklist;
            item.dueDate = data.dueDate;
            item.priority = data.priority;
            item.project = data.project;

            // remove the item from the dom
            container.remove();

            // re-add the item in the dom with updated information
            addItemToDom(
                item.title,
                item.description,
                item.checklist,
                item.dueDate,
                item.priority,
                item.project
            );
        }, item);
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
        container.remove();
    })

    itemDiv.append(itemDescription,itemChecklist,itemPriority,editButton,deleteButton);

}