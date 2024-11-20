import HeaderComponent from "./view/header-component.js";
import FormAddTaskComponent from "./view/form-add-task-component.js";
import TaskColumnComponent from "./view/task-column-component.js";
import TaskComponent from "./view/task.js";
import { render, RenderPosition } from "./framework/render.js";
import Task from "./view/task.js";

const numberOfStatuses = 4;
const numberOfTasks = 3;

const bodyContainer = document.querySelector("body");
const formContainer = document.querySelector(".task-form");
const taskBoardContainer = document.querySelector(".task-board");

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), formContainer);

for (let i = 0; i < numberOfStatuses; i++) {
  const taskColumnComponent = new TaskColumnComponent();
  render(taskColumnComponent, taskBoardContainer);

  const tasksList = document.querySelectorAll(`.task-list`);

  for (let j = 0; j < numberOfTasks; j++) {
    render(new Task(), tasksList[i]);
  }
}
