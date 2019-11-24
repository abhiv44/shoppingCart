import { USERLOGIN, ERROR, FETCH_API, ADD_TO_CART } from '../action/actionTypes/actionTypes'
import { UserAuth } from '../state/userAuth'
export function userAuthReducer(state: UserAuth, action) {
  switch (action.type) {
    case USERLOGIN:
      return { ...state, user: action.payload }
    case ERROR:
      return { ...state, err: action.payload }
    default:
      return { ...state }
  }
}
export function fetchApiReducer(state, action) {
  switch (action.type) {
    case FETCH_API:
      return { ...state, data: (action.payload || []).sort((a, b) => action.s == 1 ? a.price - b.price : action.s == -1 ? b.price - a.price : a).filter(e => action.p ? e.name.includes(action.p) : e) }
    case ADD_TO_CART:
      return { ...state, addTOCart: (state.addTOCart || []).concat(action.payload) }
    case ERROR:
      return { ...state, err: action.payload }
    default:
      return { ...state }
  }
}