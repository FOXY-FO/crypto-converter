import { RouteProps } from "react-router-dom"
import { HomePage } from "./pages"
import { CoinPage } from "./pages/CoinPage"

export const routes: RouteProps[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/coin/:id",
    component: CoinPage,
  },
]
