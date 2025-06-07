const buttons = document .querySelectorAll(".formbuilder button");
const fields = [];
let counter =0; 
const form = document.querySelector(".form");
buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        const type = button.textContent.toLowerCase().includes("text")? "text":
        button.textContent.toLowerCase().includes("checkbox")? "checkbox":
        "radio";
        const label = prompt("Enter label for"+ type + ":");
        if(!label) return;
        const field ={
            id: counter++,
            type,
            label
        };
        fields.push(field);
        console.log(fields);
        renderFields();
    })
})


function renderFields(){
    form.innerHTML= "";
  fields.forEach(newfield=>{
    const wrapper = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = newfield.label;
    const input = document.createElement("input");
    input.type = newfield.type;
    input.name = `field-${newfield.id}`;
    wrapper.appendChild(label);
    wrapper.appendChild(document.createElement("br"));
    wrapper.appendChild(input);
    wrapper.appendChild(document.createElement("br"));
    form.appendChild(wrapper);
  })
}

