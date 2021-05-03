import React from "react"
import { Route } from "react-router-dom"
import { routes } from "../../routes"
import { Navigation } from "../Navigation/Navigation"

export const App: React.FC = () => {
  return (
    <>
      <Navigation />
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </>
  )
}
