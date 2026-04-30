import {projectList} from "./index.js";

const form = document.getElementById("form");

export default function () {
    // list item title
    let box1 = document.createElement("div");
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
    let b2label = document.createElement("label");
    b2label.for = "description";
    b2label.textContent = "Description";
    let b2input = document.createElement("input");
    b2input.id = "description";
    b2input.name = "description";
    b2input.type = "textarea";
    b2input.rows = "3";
    b2input.cols = "50";
    box2.append(b2label,b2input);

    // list item checklist
    let box3 = document.createElement("div");
    let b3label = document.createElement("label");
    b3label.for = "checklist";
    b3label.textContent = "Checklist";
    let b3input = document.createElement("input");
    b3input.id = "checklist";
    b3input.name = "checklist";
    b3input.type = "textarea";
    b3input.rows = "10";
    b3input.cols = "50";
    box3.append(b3label,b3input);

    // list item due date
    let box4 = document.createElement("div");
    let b4label = document.createElement("label");
    b4label.for = "dueDate";
    b4label.textContent = "Due date";
    let b4input = document.createElement("input");
    b4input.id = "dueDate";
    b4input.name = "dueDate";
    b4input.type = "date";
    box4.append(b4label,b4input);

    // list item priority
    let box5 = document.createElement("div");
    let legend = document.createElement("legend");
    legend.textContent = "Priority";
    //ASAP
    let num1 = document.createElement("div");
    let label1 = document.createElement("label");
    label1.for = "asap";
    label1.textContent = "ASAP";
    let input1 = document.createElement("input");
    input1.id = "asap";
    input1.name = "priority";
    input1.value = "asap";
    input1.type = "radio";
    num1.append(label1,input1);
    //soon, sometime, optional
    let num2 = document.createElement("div");
    let label2 = document.createElement("label");
    label2.for = "soon";
    label2.textContent = "Soon";
    let input2 = document.createElement("input");
    input2.id = "soon";
    input2.name = "priority";
    input2.value = "soon";
    input2.type = "radio";
    num2.append(label2,input2);
    //optional
    let num3 = document.createElement("div");
    let label3 = document.createElement("label");
    label3.for = "sometime";
    label3.textContent = "Sometime";
    let input3 = document.createElement("input");
    input3.id = "sometime";
    input3.name = "priority";
    input3.value = "sometime";
    input3.type = "radio";
    num3.append(label3,input3);
    box5.append(legend,num1,num2,num3);

    //folder it should be in
    let box6 = document.createElement("div");
    let b6label = document.createElement("label");
    b6label.for = "project";
    b6label.textContent = "Project";
    let b6input = document.createElement("input");
    b6input.id = "project";
    b6input.name = "project";
    b6input.type = "select";
    //figures out what the project options should be in the dropdown
    for (i in projectList) {
        i.appendChild(/*listItem*/);
        let option;
        option.textContent = i.toString();
    };
    box6.append(b6label,b6input);

    //button to create list item
    let addNew = document.createElement("input");
    addNew.type = "submit";
    addNew.id = "addNewButton";
    addNew.name = "addNewButton";
    addNew.value = "Create";
    //makes the actual list item
    addNew.addEventListener("click", function (event) {
        event.preventDefault();
        const item = {
            title: b1input.value,
            description: b2input.value,
            checklist: b3input.value,
            dueDate: b4input.value,
            priority: selectedPriority,
            project: b6input.value
        };
    });

    form.append(box1,box2,box3,box4,box5,box6,addNew);
}