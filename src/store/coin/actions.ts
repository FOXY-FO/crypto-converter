import { InferActionsTypes, TBaseThunk } from ".."
import { ErrorResponse } from "../../api"
import { getMultipleSymbolFullData } from "../../api/price"
import { TGetMultipleSymbolFullDataBody } from "../../api/price/types"
import { displayError } from "../app/actions"

export const actions = {
  setImage: (image: string | null) =>
    ({
      type: "coin/SET_IMAGE",
      payload: { image },
    } as const),
  setName: (name: string | null) =>
    ({
      type: "coin/SET_NAME",
      payload: {
        name,
      },
    } as const),
  setSymbol: (symbol: string | null) =>
    ({
      type: "coin/SET_SYMBOL",
      payload: { symbol },
    } as const),
  setUsdRate: (usdRate: number | null) =>
    ({
      type: "coin/SET_USD_RATE",
      payload: { usdRate },
    } as const),
  setIsFetching: (isFetching: boolean) =>
    ({
      type: "coin/SET_IS_FETCHING",
      payload: { isFetching },
    } as const),
  reset: () =>
    ({
      type: "coin/RESET",
    } as const),
  setIsSuccess: (isSuccess: boolean) =>
    ({
      type: "coin/SET_IS_SUCCESS",
      payload: { isSuccess },
    } as const),
}

export const getSymbolData = (
  body: TGetMultipleSymbolFullDataBody
): TThunk => async (dispatch) => {
  dispatch(actions.setIsFetching(true))

  try {
    const data = await getMultipleSymbolFullData<TGetMultipleSymbolFullDataBody>(
      body
    )
    if (data.DISPLAY && data.RAW) {
      dispatch(actions.setIsSuccess(true))
      dispatch(actions.setImage(data.DISPLAY[body.fsyms][body.tsyms].IMAGEURL))
      dispatch(actions.setSymbol(data.RAW[body.fsyms][body.tsyms].FROMSYMBOL))
      dispatch(actions.setUsdRate(data.RAW[body.fsyms][body.tsyms].PRICE))
    } else {
      dispatch(actions.setIsSuccess(false))
      // @ts-expect-error
      dispatch(displayError((data as ErrorResponse).Message))
    }
  } catch (e) {
    const data: ErrorResponse = e.response.data
    dispatch(displayError(data.Message))
    dispatch(actions.setIsSuccess(false))
  }

  dispatch(actions.setIsFetching(false))
}

export type ActionsTypes = InferActionsTypes<typeof actions>
type TThunk = TBaseThunk<ActionsTypes, void>
