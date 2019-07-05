var todos = ["Buy new turtle"];
var input = prompt("what would you like to do?");

while(input!=="quit"){

  if(input==="list"){
  viewTodo();} 
  else if(input==="new"){
  addnewTodo();}
  else if(input==="delete"){
  deleteTodo();}
  input=prompt("what would you like to do?");
} 
console.log("ok, you quit the app");

function viewTodo(){
  console.log("*****************");
  todos.forEach(function(todo, i){
  console.log(i + ": " + todo);});
  console.log("*****************");}

function addnewTodo(){
var newTodo=prompt("enter new todo");
  todos.push(newTodo);
  console.log("todo added");}

function deleteTodo(){
  var num=prompt("enter the index of the item to be deleted");
  todos.splice(num, 1);
  console.log("deleted todo");}
