import { TAppState } from ".."

export const getGlobalError = (state: TAppState) => {
  return state.app.globalError
}

