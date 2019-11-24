import { combineReducers } from 'redux'
import { userAuthReducer, fetchApiReducer } from './userAuth'
import { dashBoardReducer } from './dashboard'
export default combineReducers({
    userAuth: userAuthReducer,
    dashboardDATA: dashBoardReducer,
    fetchApi: fetchApiReducer
})