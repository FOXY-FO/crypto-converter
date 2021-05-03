import { Preloader } from "../components/Preloader/Preloader"
import { Table } from "../components/Table/Table"

export const HomePage: React.FC = () => {
  return (
    <div>
      <Table />
      <Preloader fullScreen />
    </div>
  )
}
