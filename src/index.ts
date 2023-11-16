import { addTaskHandler } from "./handlers/addTaskHandler";
import { makeRequest } from "./makeRequest";
import { printTodo } from "./printTodo";

const forms: HTMLCollectionOf<HTMLFormElement> = document.forms;

const addForm = forms.namedItem("addtask");
const searchForm = forms.namedItem("findtask");
const todos = document.getElementById("todos");

if (addForm && searchForm && todos) {
  addForm.addEventListener("submit", addTaskHandler);
  // searchForm.addEventListener("submit", findTodos);

  makeRequest(`query Todos {
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
    const data = res.data.todos.data;
    console.log(data);
    if (Array.isArray(data)) {
      data.forEach((todo) => printTodo(todo));
    }
  });
}
