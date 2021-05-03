import { TAppState } from "../"

export const getCoins = (state: TAppState) => {
  return state.table.coins
}

export const getAreCoinsFetching = (state: TAppState) => {
  return state.table.isFetching
}
