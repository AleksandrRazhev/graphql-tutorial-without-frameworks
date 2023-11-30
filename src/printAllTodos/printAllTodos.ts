import { makeRequest } from "../makeRequest";
import { printTodo } from "../printTodo";

export const printAllTodos = () => {
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
};
