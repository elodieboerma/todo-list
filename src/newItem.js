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
    b1label.textContent = "Description";
    let b2input = document.createElement("input");
    b2input.id = "description";
    b2input.name = "description";
    b2input.type = "textarea";
    b2input.rows = "3";
    b2input.cols = "50";
    box2.append(b2label,b2input);

    // list item due date
    let box3 = document.createElement("div");
    let b3label = document.createElement("label");
    b3label.for = "dueDate";
    b3label.textContent = "Due date";
    let b3input = document.createElement("input");
    b3input.id = "dueDate";
    b3input.name = "dueDate";
    b3input.type = "date";
    box3.append(b3label,b3input);

    // list item priority
    let box4 = document.createElement("div");
    let legend = document.createElement("legend");
    legend.textContent = "Priority";
    //ASAP
    let num1 = document.createElement("div");
    let label1 = document.createElement("label");
    label1.for = "asap";
    label1.textContent = "ASAP";
    let input1 = document.createElement("input");
    input1.id = "asap";
    input1.name = "asap";
    input1.type = "radio";
    num1.append(label1,input1);
    //soon, sometime, optional
    let num2 = document.createElement("div");
    let label2 = document.createElement("label");
    label2.for = "soon";
    label2.textContent = "Soon";
    let input2 = document.createElement("input");
    input2.id = "soon";
    input2.name = "soon";
    input2.type = "radio";
    num2.append(label2,input2);
    //optional
    let num3 = document.createElement("div");
    let label3 = document.createElement("label");
    label3.for = "sometime";
    label3.textContent = "Sometime";
    let input3 = document.createElement("input");
    input3.id = "sometime";
    input3.name = "sometime";
    input3.type = "radio";
    num3.append(label3,input3);
    //optional
    let num4 = document.createElement("div");
    let label4 = document.createElement("label");
    label4.for = "optional";
    label4.textContent = "Optional";
    let input4 = document.createElement("input");
    input4.id = "optional";
    input4.name = "optional";
    input4.type = "radio";
    num4.append(label4,input4);
    box4.append(legend,num1,num2,num3,num4);
}

// item w/ checklist, category/color