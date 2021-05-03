import { NavLink, useHistory } from "react-router-dom"
import { Container } from "../Container/Container"
import s from "./Navigation.module.scss"

export const Navigation = () => {
  const history = useHistory()

  return (
    <nav className={s.navigation}>
      <Container>
        <NavLink to="/" className={s.link} activeClassName={s.link__active}>
          Home
        </NavLink>
        <button className={s.link} onClick={() => history.goBack()}>
          Back
        </button>
      </Container>
    </nav>
  )
}
