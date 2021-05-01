import { Currencies } from "ts-money"
import { ResponseCodes } from "../"
import { TCoin } from "../../types"

type TCurrencies = typeof Currencies
type TCurrenciesSymbols = keyof TCurrencies

export type TGetToplistBody = {
  tsym: TCurrenciesSymbols
  limit?: number
  page?: number
  assetClass?: "DEFI" | "ALL"
  ascending?: boolean
  sign?: boolean
}

export type TGetToplistResponse<TCurrency extends string = "USD"> = {
  Message: string
  Type: ResponseCodes
  MetaData: {
    Count: number
  }
  SponsoredData: Array<TCoin<TCurrency>>
  Data: Array<TCoin<TCurrency>>
  RateLimit: object
  HasWarning: boolean
}
