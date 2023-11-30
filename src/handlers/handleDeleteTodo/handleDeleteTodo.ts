import { makeRequest } from "../../makeRequest";

export async function handleDeleteTodo(event: Event) {
  const element: HTMLButtonElement = this;
  if (!element.parentElement) return;
  const todoId = element.parentElement.dataset.id;
  const deleteQuery = `mutation DeleteTodo {
    deleteTodo(id: "${todoId}")
  }`;

  const data: { data?: { deleteTodo?: boolean } } = await makeRequest(
    deleteQuery
  );
  if (data?.data?.deleteTodo) {
    element.parentElement.remove();
  }
}
