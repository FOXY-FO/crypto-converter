import { instance } from "../"
import { TCurrenciesSymbols } from "../../types"
import {
  TGetMultipleSymbolFullDataBody,
  TGetMultipleSymbolFullDataResponse,
} from "./types"

export const getMultipleSymbolFullData = <
  TBody extends TGetMultipleSymbolFullDataBody,
  TFsyms extends TCurrenciesSymbols = TGetMultipleSymbolFullDataBody["fsyms"],
  TTsyms extends TCurrenciesSymbols = TGetMultipleSymbolFullDataBody["tsyms"]
>(
  body: TBody
) => {
  return instance
    .get<TGetMultipleSymbolFullDataResponse<TFsyms, TTsyms>>(
      "/data/pricemultifull",
      {
        params: body,
      }
    )
    .then((res) => res.data)
}
