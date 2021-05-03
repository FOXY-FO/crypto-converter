import { RouteProps } from "react-router-dom"
import { HomePage } from "./pages"
import { CoinPage } from "./pages/CoinPage"

export const routes: RouteProps[] = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/coin",
    component: CoinPage,
    exact: true,
  },
]
