import { Action, applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import { appReducer } from "./app/reducer"
import { tableReducer } from "./table/reducer"

const rootReducer = combineReducers({
  table: tableReducer,
  app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type TAppState = ReturnType<typeof rootReducer>

export type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U
}
  ? U
  : never

export type TBaseThunk<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  TAppState,
  unknown,
  A
>
