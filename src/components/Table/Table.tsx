import { useCallback, useEffect } from "react"
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import s from "./Table.module.scss"
import { requestCoins, actions } from "../../store/table/actions"
import { getAreCoinsFetching, getCoins } from "../../store/table/selectors"
import { getImageSource } from "../../utils/helpers/image-helpers"
import { getSymbolData } from "../../store/coin/actions"
import { Preloader } from "../Preloader/Preloader"
import { Row } from "./Row/Row"
import { TCurrenciesSymbols } from "../../types"

export const Table = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const coins = useSelector(getCoins)
  const isFetching = useSelector(getAreCoinsFetching)

  useEffect(() => {
    dispatch(requestCoins({ tsym: "USD" }))

    return () => {
      dispatch(actions.reset())
    }
  }, []) // eslint-disable-line

  const requestCurrency = useCallback(
    (currencySymbol: TCurrenciesSymbols, currency: TCurrenciesSymbols) => {
      dispatch(
        getSymbolData({
          fsyms: currencySymbol,
          tsyms: currency,
        })
      )
    },
    [dispatch]
  )

  if (isFetching) return <Preloader />
  if (!coins.length) return <div>No coins</div>

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <td>№</td>
          <td>Image</td>
          <td>Name</td>
          <td>Symbol</td>
          <td>USD</td>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <Row
            key={coin.CoinInfo.Id}
            number={index + 1}
            imgSrc={getImageSource(coin.CoinInfo.ImageUrl)}
            name={coin.CoinInfo.FullName}
            symbol={coin.CoinInfo.Internal}
            usdRate={coin.DISPLAY.USD.PRICE}
            // couldn't find all the crypto currencies' types
            // so I put the "ts-expect-error" signature
            onClick={() => {
              // @ts-expect-error
              requestCurrency(coin.CoinInfo.Internal, "USD")
              history.push({
                pathname: "/coin",
                search: `?name=${coin.CoinInfo.FullName}`,
              })
            }}
          />
        ))}
      </tbody>
    </table>
  )
}
