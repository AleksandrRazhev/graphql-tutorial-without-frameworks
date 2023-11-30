import { addTaskHandler } from "./handlers/addTaskHandler";
import { findTodos } from "./handlers/findTodos";
import { printAllTodos } from "./printAllTodos";

const forms: HTMLCollectionOf<HTMLFormElement> = document.forms;

const addForm = forms.namedItem("addtask");
const searchForm = forms.namedItem("findtask");

if (addForm && searchForm) {
  addForm.addEventListener("submit", addTaskHandler);
  searchForm.addEventListener("submit", findTodos);
  printAllTodos();
}
