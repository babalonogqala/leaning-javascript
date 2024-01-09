const todolist = []; //array for the todo that will hold the input

randerTodoList(); //pulling the function
function randerTodoList() {
  let todolistHTML = "";
  // for loop for taking in the empty array
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const html = `<p>${todo}</p>`; //add the paragraph that will hold the input text
    todolistHTML += html; //by adding the 2 variables it will add what ever is entered in the todo input to the array then to the paragraph
  }

  document.querySelector(".todo-list").innerHTML = todolistHTML; //this is the DOM for the div that holds the paragraph.
}

// function for taking input on the page.
function addTodo() {
  const inputElement = document.querySelector(".name-input"); //DOM for the input bar.
  const name = inputElement.value; //tracks what is entered.

  todolist.push(name); //adds new array value in the empty array .

  inputElement.value = ""; //this resets the input when button is pressed it will clear the input.

  randerTodoList(); //pulling the function for the displaying of the fucntion for the paragraph.
}
