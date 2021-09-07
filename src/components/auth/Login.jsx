import React from 'react'
import { useDispatch } from 'react-redux'

import { loginAction } from "../../redux/actions/user"
import useInput from "../../hooks/useInput"
import Input from '../../ui/Input/Input'
import './auth.scss'

const Login = ({ setVisible }) => {
    const dispatch = useDispatch()

    const email = useInput("")
    const password = useInput("")

    const handleClick = () => {
        const user = {
            email: email.value,
            password: password.value
        }
        
        dispatch(loginAction(user))
        email.clear()
        password.clear()

        setVisible(false)
    }

    return (
        <div className="auth">
            <div className="auth__header">Авторизация</div>
            <Input placeholder="email..." value={email.value} onChange={email.onChange}/>
            <Input type="password" placeholder="Пароль..." value={password.value} onChange={password.onChange} />
            <button className="auth__btn" onClick={handleClick}>Войти</button>
        </div>
    )
}

export default Login
