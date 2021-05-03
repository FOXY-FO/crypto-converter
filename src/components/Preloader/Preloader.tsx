import { FC } from "react"
import cn from "classnames"
import s from "./Prealoder.module.scss"
import SvgPreloader from "../common/iconComponents/Preloader"

type Props = {
  fullScreen?: boolean
}

export const Preloader: FC<Props> = ({ fullScreen = false }) => {
  return (
    <div className={cn(s.preloader, { [s.preloader__fullScreen]: fullScreen })}>
      <SvgPreloader />
    </div>
  )
}
