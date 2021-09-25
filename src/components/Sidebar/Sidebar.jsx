import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile.jsx";
import Categories from "./Categories.jsx";

import { fetchLists, addList, selectLists } from "../../redux/features/lists";

import { Popup } from "..";

function Sidebar({ currentUser }) {
  const [isOpenModal, setOpenModal] = React.useState(false);

  const [openSettings, setOpenSettings] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchLists());
  }, [dispatch]);

  const items = useSelector(selectLists);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onSaveNewCategory = (text) => {
    dispatch(addList({ title: text }));
    setOpenModal(false);
  };

  const handleClickSettings = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <>
      <div className="sidebar">
        <Profile currentUser={currentUser} />
        <div className="categories-wrap">
          <h2 className="categories-title">Категории</h2>
          <Categories
            items={items}
            dispatch={dispatch}
            openSettings={openSettings}
          />
        </div>
        <div className="settings">
          <button
            onClick={onOpenModal}
            className="settings-button settings-button--add"
          ></button>
          <button
            className="settings-button settings-button--settings"
            onClick={handleClickSettings}
          ></button>
        </div>
      </div>
      {isOpenModal && (
        <Popup onCloseClick={onCloseModal} onSaveClick={onSaveNewCategory} />
      )}
    </>
  );
}

export default Sidebar;
