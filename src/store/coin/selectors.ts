import { TAppState } from ".."

export const getImage = (state: TAppState) => {
  return state.coin.image
}

export const getName = (state: TAppState) => {
  return state.coin.name
}

export const getSymbol = (state: TAppState) => {
  return state.coin.symbol
}

export const getUsdRate = (state: TAppState) => {
  return state.coin.usdRate
}
