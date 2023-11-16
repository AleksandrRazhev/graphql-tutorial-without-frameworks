import { makeRequest } from "../../makeRequest";
import { printTodo } from "../../printTodo";

export async function addTaskHandler(event) {
  event.preventDefault();
  if (!this.taskname.value) return;
  const newTaskQuery = `mutation CreateTodo {
          createTodo(input:{title: "${this.taskname.value}", completed: false}){
            title
            completed
            id
          }
        }`;

  const data = await makeRequest(newTaskQuery);
  printTodo(data.data.createTodo);
  this.reset();
}
