import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { requestCoins, actions } from "../../store/table/actions"
import { getAreCoinsFetching, getCoins } from "../../store/table/selectors"
import { getImageSource } from "../../utils/helpers/image-helpers"
import { Preloader } from "../Preloader/Preloader"
import { Row } from "./Row/Row"

export const Table = () => {
  const dispatch = useDispatch()
  const coins = useSelector(getCoins)
  const isFetching = useSelector(getAreCoinsFetching)

  useEffect(() => {
    dispatch(requestCoins({ tsym: "USD" }))

    return () => {
      dispatch(actions.reset())
    }
  }, []) // eslint-disable-line

  if (isFetching) return <Preloader />
  if (!coins.length) return <div>No coins</div>

  return (
    <table>
      <thead>
        <tr>
          <td>№</td>
          <td>Image</td>
          <td>Name</td>
          <td>Caption</td>
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
          />
        ))}
      </tbody>
    </table>
  )
}
