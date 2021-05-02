import { ActionsTypes } from "./actions"

const initialState = {
  globalError: null as string | null,
}

export const appReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "app/SET_GLOBAL_ERROR":
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
