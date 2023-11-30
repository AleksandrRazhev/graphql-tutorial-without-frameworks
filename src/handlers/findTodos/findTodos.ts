import { makeRequest } from "../../makeRequest";
import { printAllTodos } from "../../printAllTodos";
import { printTodo } from "../../printTodo";

export async function findTodos(event: Event) {
  event.preventDefault();
  const element: HTMLFormElement = this;
  const searchText: string = element.searchname.value;

  if (!searchText) {
    printAllTodos();
  } else {
    const searchQuery = `query searchQuery{
              todos(options:{search:{q: "${searchText}"}, sort:{field: "id", order: ASC}}){
                  data {
                    id
                    title
                    completed
                    user { name }
                  }
                }
          }`;
    const { data } = await makeRequest(searchQuery);

    const todos = document.getElementById("todos");
    if (!todos) return;
    todos.innerHTML = "";
    data.todos.data.forEach((todo) => printTodo(todo));
  }
}
