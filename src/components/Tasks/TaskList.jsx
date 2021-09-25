import React from "react";
import { useSelector } from "react-redux";
import { selectActiveLists } from "../../redux/features/lists";
import { selectTasks, selectTasksLoading } from "../../redux/features/tasks";
import Task from "./Task/index.jsx";
import TaskLoader from "./Task/TaskLoader.jsx";

function TaskList({ onToggleChecked, onDeleteTask, onEditTask }) {
  const items = useSelector(selectTasks);
  const loading = useSelector(selectTasksLoading);
  const activeList = useSelector(selectActiveLists);

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
          {items && !loading
            ? filterItems.map((item) => (
                <Task
                  // eslint-disable-next-line no-underscore-dangle
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
