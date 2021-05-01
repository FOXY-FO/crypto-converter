import { TGetToplistBody, TGetToplistResponse } from "./types"
import { instance } from ".."

export const getToplist = <T extends TGetToplistBody>(body: T) => {
  return instance.get<TGetToplistResponse<T["tsym"]>>(
    "/data/top/totalvolfull",
    {
      params: body,
    }
  )
}
