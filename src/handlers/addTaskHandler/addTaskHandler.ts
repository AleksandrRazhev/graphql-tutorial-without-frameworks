import { makeRequest } from "../../makeRequest";
import { printTodo } from "../../printTodo";

export async function addTaskHandler(event: SubmitEvent) {
  event.preventDefault();
  const element: HTMLFormElement = this;

  const formData: { [key: string]: string } = {};
  new FormData(element).forEach((value, key) => {
    if (typeof value !== "string") return;
    formData[key] = value;
  });

  if (!("taskname" in formData)) return;
  const newTaskQuery = `mutation CreateTodo {
  createTodo(input:{title: "${formData.taskname}", completed: false}){
  title
  completed
  id
}
}`;

  const data = await makeRequest(newTaskQuery);
  printTodo(data.data.createTodo);
  element.reset();
}
