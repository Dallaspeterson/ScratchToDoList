// get references to the input field and tasak list
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//Function to add a task to the list
function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "")  {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value =""; //Cleaad input field
    }
}

// Attach addTask function to the button click event
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addTask);

//Add event listener to the entire task list for button slicks
taskList.addEventListener("click", function(event){
    if (event.taraget.classList.contains("remove-button")) {
        event.target.parentNode.remove(); // Remove the parent <li> element
    }
});