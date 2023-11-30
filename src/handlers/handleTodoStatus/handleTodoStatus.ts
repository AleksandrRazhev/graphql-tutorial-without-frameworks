import { makeRequest } from "../../makeRequest";

export async function handleTodoStatus(event: Event) {
  const element: HTMLInputElement = this;
  if (!element.parentElement) return;
  const todoId = element.parentElement.dataset.id;

  const changeStatusQuery = `mutation ChangeStatus {
    updateTodo(id: "${todoId}", input: {completed: ${element.checked}}) {
          completed
        }
  }`;

  const data = await makeRequest(changeStatusQuery);
  if (data.data.updateTodo.completed) {
    element.setAttribute("checked", "true");
  } else {
    element.removeAttribute("checked");
  }
}
