const form = document.getElementById("form");


export default function () {
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
    //makes the actual list item
    addNewProject.addEventListener("click", function (event) {
        event.preventDefault();
        return input.value;
    });

    form.appendChild(box,addNewProject);
}