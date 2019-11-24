import { USERLOGIN, ERROR, FETCH_API, ADD_TO_CART } from './actionTypes/actionTypes'
import * as userLogin from '../data/userLogin.json'
import { login } from './basePath'
import axios from 'axios'
export const userAuth = () => dispatch => {
    // fetch(login)
    axios.get(login)
        .then(res => console.log(res.data)
            // dispatch({
            // type:USERLOGIN,
            // payload:userLogin})
        )
        .then(res => console.log(res))
        .catch(err => dispatch({ type: ERROR, payload: err.response.data }))
}
export const fetchApiAction = (e, s) => dispatch => {
    axios.get('https://api.myjson.com/bins/qzuzi')
        .then(res => dispatch({ type: FETCH_API, payload: res.data, p: e, s: s }))
        .catch(err => dispatch({ type: ERROR, payload: err.response.data }))
}
export const addToCartAction = (e) => {
    return {
        type: ADD_TO_CART,
        payload: e
    }
}