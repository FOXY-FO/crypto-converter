import React from "react"
import s from "./Row.module.scss"

type Props = {
  number: number
  imgSrc: string
  name: string
  symbol: string
  usdRate: string
  onClick?: () => void
}

export const Row: React.FC<Props> = ({
  number,
  imgSrc,
  name,
  symbol,
  usdRate,
  onClick = () => {},
}) => {
  return (
    <tr className={s.row} onClick={onClick}>
      <td>{number}</td>
      <td>
        <div className={s.image}>
          <img src={imgSrc} alt={symbol} />
        </div>
      </td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>{usdRate}</td>
    </tr>
  )
}
