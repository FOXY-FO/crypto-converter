import { InferActionsTypes, TBaseThunk } from ".."
import { TCoin, TCurrenciesSymbols } from "../../types"
import { TGetToplistBody, TGetToplistResponse } from "../../api/top/types"
import { getToplist } from "../../api/top"
import { ResponseCodes } from "../../api"
import { displayError } from "../app/actions"

export const actions = {
  setCoins: (coins: TCoin<TCurrenciesSymbols>[]) =>
    ({
      type: "table/SET_COINS",
      payload: { coins },
    } as const),
  setIsFetching: (isFetching: boolean) =>
    ({
      type: "table/SET_IS_FETCHING",
      payload: { isFetching },
    } as const),
  reset: () =>
    ({
      type: "table/RESET",
    } as const),
}

export const requestCoins = (body: TGetToplistBody): TThunk => async (
  dispatch
) => {
  dispatch(actions.setIsFetching(true))

  try {
    const data = await getToplist(body)
    if (data.Type === ResponseCodes.Success) {
      dispatch(actions.setCoins(data.Data))
    } else {
      dispatch(displayError(data.Message))
    }
  } catch (e) {
    const data: TGetToplistResponse<TCurrenciesSymbols> = e.response.data
    dispatch(displayError(data.Message))
  }

  dispatch(actions.setIsFetching(false))
}

export type ActionsTypes = InferActionsTypes<typeof actions>
type TThunk = TBaseThunk<ActionsTypes, void>
