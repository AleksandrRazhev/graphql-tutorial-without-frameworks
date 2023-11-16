import { makeRequest } from "./makeRequest/makeRequest";
import { printTodo } from "./printTodo/printTodo";

const forms = document.forms;
const addForm = document.forms.addtask;
const searchForm = document.forms.searchForm;
const todos = document.getElementById("todos");

const request = makeRequest(`query Todos {
    todos {
      data {
        id
        title
        completed
        user {
          id
          name
          address {
            city
          }
        }
      }
    }
  }`).then((res) => {
  res.data.todos.data.forEach((todo) => {
    console.log(todo);
    printTodo(todo);
  });
});
