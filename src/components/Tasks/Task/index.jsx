import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

function Task({_id, text, completed, onToggleChecked, onDeleteTask, onEditTask }) {
    
    const [ taskCompleted, setTaskCompleted ] = React.useState(false)

    const onHandleChange = () => {
        setTaskCompleted(!taskCompleted)
        onToggleChecked(_id, completed) 
    }

    const deleteClick = () => {
        onDeleteTask(_id)
    }

    const editClick = () => {
        onEditTask(_id, text)
    }

    return (
        <div className="task">
            <div className="task__checkbox">
                <label>
                    <input onChange={onHandleChange} type="checkbox" checked={completed ? true : false}/>
                    <span></span>
                </label>
            </div>
            <div className={classNames("task__text", {
                "completed": completed
            })}>
                {text}
            </div>
            <button onClick={editClick} className="task__edit">
                <svg xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnssvgjs="http://svgjs.com/svgjs" version="1.1" width="15" height="15"
                    x="0" y="0" viewBox="0 0 401.52289 401"
                    style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" className="">
                    <g>
                        <path xmlns="http://www.w3.org/2000/svg"
                            d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"
                            fill="#707070" dataoriginal="#000000" className="" />
                        <path xmlns="http://www.w3.org/2000/svg"
                            d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"
                            fill="#707070" dataoriginal="#000000" className="" />
                    </g>
                </svg>
            </button>
            <button onClick={deleteClick} className="task__delete">
                <svg height="12pt" viewBox="0 0 512 512" width="12pt"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                        fill="#f44336" />
                    <path
                        d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                        fill="#fafafa" />
                </svg>
            </button>
        </div>
    )
}

Task.propTypes = {
    text: PropTypes.string
}

export default Task