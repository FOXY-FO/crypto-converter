import { TCurrenciesSymbols, TRawCoin, TDisplayCoin } from "../../types"

export type TGetMultipleSymbolFullDataBody = {
  tryConversion: boolean
  fsyms: TCurrenciesSymbols
  tsyms: TCurrenciesSymbols
  relaxedValidation: boolean
  e: string
  extraParams: string
  sign: boolean
}

export type TGetMultipleSymbolFullDataResponse<
  TFsyms extends TCurrenciesSymbols,
  TTsyms extends TCurrenciesSymbols
> = {
  RAW: {
    [key in TFsyms]: {
      [key in TTsyms]: TRawCoin
    }
  }
  DISPLAY: {
    [key in TFsyms]: {
      [key in TTsyms]: TDisplayCoin
    }
  }
}
