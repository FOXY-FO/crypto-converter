import { ActionsTypes } from "./actions"

const initialState = {
  image: null as string | null,
  name: null as string | null,
  symbol: null as string | null,
  usdRate: null as number | null,
}

export const coinReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "coin/SET_SYMBOL":
    case "coin/SET_USD_RATE":
    case "coin/SET_NAME":
    case "coin/SET_IMAGE":
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
