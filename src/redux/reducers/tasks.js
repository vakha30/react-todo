import axios from "axios"

const initialState = {
    items: [],
    isLoaded: false
}

const lists = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TASKS":
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case "SET_LOADED":
            return {
                ...state,
                isLoaded: action.payload
            }
            // case "ADD_TASK":
            //     try {
            //         const response = axios.post("http://localhost:3001/api/tasks/add", action.payload)
            //         console.log('👉 Returned data:', response);
            //     } catch(e) {
            //         console.log(`😱 Axios request failed: ${e}`);
            //     }
                
            //     return state
            case "SET_COMPLETED":
                try {
                    const response = axios.put(`https://react-todo-30.herokuapp.com/api/tasks/${action.payload.id}`, {completed: !action.payload.completed})
                    console.log('👉 Returned data:', response);
                } catch(e) {
                    console.log(`😱 Axios request failed: ${e}`);
                }
                
                return state
        default:
            return state
    }
}

export default lists