// let textBox = document.getElementById("textBox")
// let addButton = document.getElementById("add-button")
// let pendingTasks = document.getElementById("pendingTasks")
// let completedTasks=document.getElementById("completedTasks")
let textBox = $("#textBox")
let addButton = $("#add-button")
let pendingTasks = $("#pendingTasks")
let completedTasks = $("#completedTasks")

function deleteButton(element){

  element = $(element)

element.parent().remove()

}

function move(element){
  element = $(element)
  if(element.is(":checked")){

    completedTasks.append(element.parent())

  } else {

    pendingTasks.append(element.parent())

  }
}

addButton.click(function(){
  let taskValue= textBox.val()
  let taskDiv = `
  <div id = "task-div" class="taskDiv">
  <input  class="taskCheckBox" type="checkbox" onchange="move(this)"/>
  <label> ${taskValue} </label>
  <button class="deleteButton" onclick="deleteButton(this)">Delete</button>

  </div>
  `
  pendingTasks.append(taskDiv)}


)
