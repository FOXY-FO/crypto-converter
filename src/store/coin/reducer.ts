import { ActionsTypes } from "./actions"

const initialState = {
  image: null as string | null,
  name: null as string | null,
  symbol: null as string | null,
  usdRate: null as number | null,
  isFetching: false,
  isSuccess: false,
}

export const coinReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "coin/SET_SYMBOL":
    case "coin/SET_USD_RATE":
    case "coin/SET_NAME":
    case "coin/SET_IMAGE":
    case "coin/SET_IS_SUCCESS":
    case "coin/SET_IS_FETCHING":
      return {
        ...state,
        ...action.payload,
      }
    case "coin/RESET":
      return {
        ...initialState,
      }
    default:
      return state
  }
}
