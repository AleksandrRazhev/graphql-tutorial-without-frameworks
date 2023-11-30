import { makeRequest } from "../../makeRequest";
import { printTodo } from "../../printTodo";

export async function addTaskHandler(event: SubmitEvent) {
  event.preventDefault();
  const element: HTMLFormElement = this;

  const newTaskQuery = `mutation CreateTodo {
createTodo(input:{title: "${element.taskname.value}", completed: false}){
  title
  completed
  id
}
}`;

  const data = await makeRequest(newTaskQuery);
  printTodo(data.data.createTodo);
  element.reset();
}
