let index = -1;
const table = document.getElementById("table");
const addBtn = document.getElementById("btn1");
const searchInput = document.querySelector("#box input");
const flag = {Name: false, Cat: false, Year: false};
let data = [
    {Name: "HTML", Cat:"Web", Year: "1993"},
    {Name: "Java", Cat: "Programming", Year: "1995"},
    {Name: "JavaScript", Cat: "Web", Year: "1995"}, 
    {Name: "MongoDB", Cat: "Database", Year: '2007'},
    {Name: "Python", Cat: "Programming", Year: '1991'},
]
function addItem(){
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let year = document.getElementById('year').value;
    if(index>=0){
        data[index] = {Name: name, Cat: category, Year: year};
        index = -1;
        addBtn.textContent = "Add Item";
    }else{
        data.push({Name: name, Cat: category, Year: year});
    }
    clearInputs();
    displayData();
}
function displayData(){
     table.innerHTML = `
    <tr class="titles">
      <th style="width: 5%">S.no</th>
      <th style="width: 30%">Name</th>
      <th style="width: 30%">Category</th>
      <th style="width: 10%">Year</th>
      <th style="width: 2%">Edit Entry</th>
      <th style="width: 2%">Delete Entry</th>
    </tr>`;
    data.forEach((item, i)=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${i+1}</td>
        <td>${item.Name}</td>
        <td>${item.Cat}</td>
        <td>${item.Year}</td>
        <td><button onclick = "editItem(${i})">Edit</button></td>
        <td><button onclick = "deleteItem(${i})">Delete</button></td>
        `;
        table.appendChild(row);
    });
}
function editItem(i){
    index = i;
    const item = data[i];
    document.getElementById("name").value = item.Name;
    document.getElementById("category").value = item.Cat;
    document.getElementById("year").value = item.Year;
    addBtn.textContent = "Update";
}
function deleteItem(i){
    if(confirm("Are you sure you want to delete this item?")){
        data.splice(i,1);
        displayData();
    }
}
function clearInputs(){
    document.getElementById("name").value = "";
    document.getElementById("category").value="";
    document.getElementById("year").value = "";
}
addBtn.addEventListener("click", addItem);
displayData();
searchInput.addEventListener("input", function(){
    const searchText = this.value.toLowerCase();
    const filtered = data.filter((item)=>
        item.Name.toLowerCase().includes(searchText));
    table.innerHTML = `
    <tr class= "titles">
    <th style= "width: 5%">S.no</th>
    <th style = "width: 30%">Name</th>
    <th style = "width: 10%">Category</th>
    <th style = "width: 10%">Year</th>
    <th style = "width: 2%">Edit Entry</th>
    <th style = "width: 2%">Delete Entry</th>
    </tr>
    `;
    filtered.forEach((item, i)=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${i+1}</td>
        <td>${item.Name}</td>
        <td>${item.Cat}</td>
        <td>${item.Year}</td>
        <td><button onclick = "editItem(${data.indexOf(item)})">Edit</button></td>
        <td><button onclick = "deleteItem(${data.indexOf(item)})">Delete</button><td>
        `;
        table.appendChild(row);
    });
});

