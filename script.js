let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks(){

const taskList = document.getElementById("taskList");
taskList.innerHTML="";

tasks.forEach((task,index)=>{

const li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
<span onclick="toggleTask(${index})">${task.text}</span>
<div>
<button class="delete" onclick="deleteTask(${index})">X</button>
</div>
`;

taskList.appendChild(li);

});

saveTasks();
}

function addTask(){

const input = document.getElementById("taskInput");
const text = input.value.trim();

if(text==="") return;

tasks.push({text:text,completed:false});

input.value="";
displayTasks();
}

function deleteTask(index){
tasks.splice(index,1);
displayTasks();
}

function toggleTask(index){
tasks[index].completed = !tasks[index].completed;
displayTasks();
}

document.getElementById("themeToggle").onclick = function(){
document.body.classList.toggle("dark");
}

displayTasks();