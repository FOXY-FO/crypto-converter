import { ResponseCodes } from "../"
import { TCoin, TCurrenciesSymbols } from "../../types"

export type TGetToplistBody = {
  tsym: TCurrenciesSymbols
  limit?: number
  page?: number
  assetClass?: "DEFI" | "ALL"
  ascending?: boolean
  sign?: boolean
}

export type TGetToplistResponse<TCurrency extends TCurrenciesSymbols> = {
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
