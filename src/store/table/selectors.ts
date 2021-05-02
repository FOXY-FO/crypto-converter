import { TAppState } from "../"

export const getCoins = (state: TAppState) => {
  return state.table.coins
}
