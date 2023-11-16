import { makeRequest } from "../../makeRequest/makeRequest";

export async function handleTodoStatus() {
  const todoId = this.parentElement.dataset.id;

  const changeStatusQuery = `mutation ChangeStatus {
      updateTodo(id: "${todoId}", input: {completed: ${this.checked}}) {
          completed
      }
  }`;

  const data = await makeRequest(changeStatusQuery);
  if (data.data.updateTodo.completed) {
    this.setAttribute("checked", "true");
  } else {
    this.removeAttribute("checked");
  }
}
