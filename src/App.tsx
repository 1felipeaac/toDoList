import Text from "./components/text"
import TrashIcon from "./assets/icons/Trash-Regular.svg?react"
import CheckRegularIcon from "./assets/icons/Check-Regular.svg?react"
import SpinnerIcon from "./assets/icons/Spinner.svg?react"
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react"
import SquareRegularIcon from "./assets/icons/Square-Regular.svg?react"
import Icon from "./components/icon"
export default function App() {

  return (
    <div>
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" className="text-pink-dark">
          Olá mundo!
        </Text>
        <Text className="text-green-dark">
          Olá mundo!
        </Text>
        <Text variant="body-md-bold" className="text-gray-400">
          Olá mundo!
        </Text>
      </div>
      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-light"/>
        <Icon svg={CheckRegularIcon} className="fill-green-dark"/>
        <Icon svg={SpinnerIcon} className="fill-green-base"/>
        <Icon svg={PencilIcon} className="fill-pink-light"/>
        <Icon svg={SquareRegularIcon} className="fill-pink-dark"/>
      </div>
    </div>
  )
}

