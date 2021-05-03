import React from "react"
import { Route } from "react-router-dom"
import { routes } from "../../routes"

export const App: React.FC = () => {
  return (
    <>
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </>
  )
}
