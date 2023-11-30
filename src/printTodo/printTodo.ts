import { handleTodoStatus } from "../handlers/handleTodoStatus";
import { handleDeleteTodo } from "../handlers/handleDeleteTodo";

interface IPrintTodo {
  title: string;
  completed: boolean;
  id: string;
  user: { name: string };
}

export function printTodo({
  title = "unknown title",
  completed = false,
  id = "",
  user = { name: "unknown name" },
}: IPrintTodo) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  if ("name" in user)
    li.innerHTML = `&nbsp; ${title} | ID: ${id} | by <b>${user.name}</b>`;
  li.setAttribute("data-id", id);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  if (completed) {
    checkbox.setAttribute("checked", "true");
  }
  checkbox.addEventListener("change", handleTodoStatus);
  li.prepend(checkbox);

  const del = document.createElement("button");
  del.className = "btn btn-link mb-1";
  del.innerHTML = "&times;";
  del.addEventListener("click", handleDeleteTodo);
  li.append(del);

  const todos = document.getElementById("todos");
  if (todos) todos.prepend(li);
}
