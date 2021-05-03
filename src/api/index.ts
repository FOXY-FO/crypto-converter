import axios from "axios"

export const instance = axios.create({
  baseURL: "https://min-api.cryptocompare.com",
  headers: {
    authorization: `Apikey ${process.env.REACT_APP_API_KEY}`,
  },
})

export enum ResponseCodes {
  Success = 100,
  Error = 2,
}

export enum ErrorCodes {
  Error = 2,
}

export type ErrorResponse = {
  Response: string
  Message: string
  HasWarning: boolean
  Type: ErrorCodes
  RateLimit: object
  Data: object
  ParamWithError: string
}
