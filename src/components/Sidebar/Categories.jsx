import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector } from "react-redux";
import Category from "./Category.jsx";

import {
  deleteList,
  selectActiveLists,
  setActiveList,
} from "../../redux/features/lists";
import { selectTasks } from "../../redux/features/tasks";

function Categories({ items, dispatch, openSettings }) {
  const activeList = useSelector(selectActiveLists);

  const taskItems = useSelector(selectTasks);

  function onSelectList(id) {
    dispatch(setActiveList(id));
  }

  const onDeleteList = (id) => {
    dispatch(deleteList(id));
  };

  return (
    <div
      className={classNames("categories", {
        settings: openSettings,
      })}
    >
      <Category
        title="Все задачи"
        onSelectList={onSelectList}
        activeList={activeList}
        _id={null}
        count={taskItems.length}
      />
      {items &&
        items.map((item) => {
          const filterItems = taskItems.filter(
            // eslint-disable-next-line no-underscore-dangle
            (task) => task.list === item._id
          );
          return (
            <Category
              // eslint-disable-next-line no-underscore-dangle
              key={item._id}
              {...item}
              onSelectList={onSelectList}
              activeList={activeList}
              count={filterItems.length}
              openSettings={openSettings}
              onDeleteList={onDeleteList}
            />
          );
        })}
    </div>
  );
}

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Categories;
