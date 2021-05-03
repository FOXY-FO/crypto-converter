import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, useLocation } from "react-router"
import queryString from "querystring"
import s from "./CoinPage.module.scss"
import { actions } from "../../store/coin/actions"
import {
  getImage,
  getName,
  getSymbol,
  getUsdRate,
  getIsCoinFetching,
  getIsSuccess,
} from "../../store/coin/selectors"
import { Preloader } from "../../components/Preloader/Preloader"
import { getImageSource } from "../../utils/helpers/image-helpers"
import { Container } from "../../components/Container/Container"

type Search = {
  name?: string
}

export const CoinPage: FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const image = useSelector(getImage)
  const name = useSelector(getName)
  const symbol = useSelector(getSymbol)
  const usdRate = useSelector(getUsdRate)
  const isFetching = useSelector(getIsCoinFetching)
  const isSuccess = useSelector(getIsSuccess)

  useEffect(() => {
    return () => {
      dispatch(actions.reset())
    }
  }, []) // eslint-disable-line

  useEffect(() => {
    const search = location.search.slice(1)
    const parsedSearch: Search = queryString.parse(search)

    if (parsedSearch.name) {
      dispatch(actions.setName(parsedSearch.name))
    }
  }, [location.search, dispatch])

  if (isFetching) return <Preloader fullScreen />
  if (!isSuccess) return <Redirect to="/" />

  return (
    <Container>
      <div className={s.page}>
        <div className={s.image}>
          {image && (
            <img src={getImageSource(image)} alt={symbol || undefined} />
          )}
        </div>
        <div className={s.content}>
          {name && <h1 className={s.name}>{name}</h1>}
          {symbol && <div className={s.symbol}>{symbol}</div>}
          {usdRate && <div className={s.rate}>${usdRate}</div>}
        </div>
      </div>
    </Container>
  )
}
