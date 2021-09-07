import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import TaskLoader from "./Task/TaskLoader";

function TaskList({ onToggleChecked, onDeleteTask, onEditTask }) {
  const { items, isLoaded } = useSelector(({ tasks }) => tasks);
  const { activeList } = useSelector(({ lists }) => lists);

  const filterItems = activeList
    ? items.filter((item) => item.list === activeList)
    : items;
  return (
    <div className="tasks-wrap">
      <div className="task-list">
        <div className="task-list__header">
          <h2>Все задачи</h2>
        </div>
        <div className="tasks">
          {items && isLoaded
            ? filterItems.map((item) => (
                <Task
                  key={item._id}
                  {...item}
                  onToggleChecked={onToggleChecked}
                  onDeleteTask={onDeleteTask}
                  onEditTask={onEditTask}
                />
              ))
            : Array(6)
                .fill(0)
                .map((_, index) => <TaskLoader key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
