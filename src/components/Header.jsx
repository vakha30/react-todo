import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/user";
import Popup from "../ui/Popup/Popup.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import { setActiveList } from "../redux/features/lists";

function Header({ isAuth }) {
  const dispatch = useDispatch();
  const [visibleRegister, setVisibleRegister] = useState(false);
  const [visibleLogin, setVisibleLogin] = useState(false);

  const handleLogoutClick = () => {
    dispatch(setActiveList(null));
    dispatch(logout());
  };

  return (
    <header className="header">
      <ul className="header-circles">
        <li className="header-circles--red"></li>
        <li className="header-circles--yellow"></li>
        <li className="header-circles--green"></li>
      </ul>
      {isAuth ? (
        <button className="header-auth__btn" onClick={handleLogoutClick}>
          Выйти
        </button>
      ) : (
        <div className="header-auth">
          <button
            className="header-auth__btn"
            onClick={() => setVisibleLogin(true)}
          >
            Войти
          </button>
          <button
            className="header-auth__btn"
            onClick={() => setVisibleRegister(true)}
          >
            Зарегистрироваться
          </button>
        </div>
      )}

      <Popup visible={visibleRegister} setVisible={setVisibleRegister}>
        <Register setVisible={setVisibleRegister} />
      </Popup>
      <Popup visible={visibleLogin} setVisible={setVisibleLogin}>
        <Login setVisible={setVisibleLogin} />
      </Popup>
    </header>
  );
}

export default Header;
