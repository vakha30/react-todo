import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Category from "./Category";

import { useSelector } from "react-redux";
import { deleteList, setActiveList } from "../../redux/actions/lists";

function Categories({ items, dispatch, openSettings }) {
  const { activeList } = useSelector(({ lists }) => lists);

  const tasks = useSelector(({ tasks }) => tasks.items);

  const onSelectList = (id) => {
    dispatch(setActiveList(id));
  };

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
        count={tasks.length}
      />
      {items &&
        items.map((item) => {
          const filterItems = tasks.filter((task) => task.list === item._id);
          return (
            <Category
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
