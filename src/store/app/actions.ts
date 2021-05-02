import { InferActionsTypes, TBaseThunk } from ".."

export const actions = {
  setGlobalError: (globalError: string | null) =>
    ({
      type: "app/SET_GLOBAL_ERROR",
      payload: { globalError },
    } as const),
}

export const displayError = (error: string): TThunk => async (dispatch) => {
  dispatch(actions.setGlobalError(error))
  const timeout = setTimeout(() => {
    dispatch(actions.setGlobalError(null))
    clearTimeout(timeout)
  }, 1000 * 10)
}

export type ActionsTypes = InferActionsTypes<typeof actions>
type TThunk = TBaseThunk<ActionsTypes, void>
