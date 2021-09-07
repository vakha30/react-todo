const initialState = {
    items: [],
    activeList: null
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LISTS":
            return {
                ...state,
                items: action.payload
            }
        case "SET_ACTIVE_LIST":
            return {
                ...state,
                activeList: action.payload
            }
        case "ADD_LIST":
            
            return state
        default:
            return state
    }
}

export default tasks