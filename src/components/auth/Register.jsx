import React from "react";
import { useDispatch } from "react-redux";
import Input from "../../ui/Input/Input.jsx";

import { register } from "../../redux/features/user";
import useInput from "../../hooks/useInput";

import "./auth.scss";

const Register = ({ setVisible }) => {
  const dispatch = useDispatch();

  const name = useInput("");
  const email = useInput("");
  const password = useInput("");

  const handleClick = () => {
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(register(user));
    name.clear();
    email.clear();
    password.clear();

    setVisible(false);
  };

  return (
    <div className="auth">
      <div className="auth__header">Регистрация</div>
      <Input placeholder="Имя..." value={name.value} onChange={name.onChange} />
      <Input
        placeholder="Email..."
        value={email.value}
        onChange={email.onChange}
      />
      <Input
        type="password"
        placeholder="Пароль..."
        value={password.value}
        onChange={password.onChange}
      />
      <button className="auth__btn" onClick={handleClick}>
        Зарегистрироваться
      </button>
    </div>
  );
};

export default Register;
