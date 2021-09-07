import { combineReducers } from 'redux'

import lists from './lists'
import tasks from './tasks'
import modal from './modal'
import user from './user'





const rootReducer = combineReducers({
    lists,
    tasks,
    modal,
    user
})

export default rootReducer;
