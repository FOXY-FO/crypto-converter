import { TCoin } from "../../types"
import { ActionsTypes } from "./actions"

const initialState = {
  coins: [] as TCoin[],
  isFetching: false,
}

export const tableReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "table/SET_COINS":
    case "table/SET_IS_FETCHING":
      return {
        ...state,
        ...action.payload,
      }
    case "table/RESET":
      return {
        ...initialState,
      }
    default:
      return state
  }
}
