import Text from "./components/text"
import TrashIcon from "./assets/icons/Trash-Regular.svg?react"
import CheckRegularIcon from "./assets/icons/Check-Regular.svg?react"
import SpinnerIcon from "./assets/icons/Spinner.svg?react"
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react"
import PlusIcon from "./assets/icons/Plus-Regular.svg?react"
import SquareRegularIcon from "./assets/icons/Square-Regular.svg?react"
import XRegularIcon from "./assets/icons/X-Regular.svg?react"
import Icon from "./components/icon"
import Badge from "./components/badge"
import Button from "./components/button"
import ButtonIcon from "./components/button-icon"
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
        <Icon svg={CheckRegularIcon}/>
        <Icon svg={PlusIcon}/>
        <Icon svg={SpinnerIcon} animate/>
        <Icon svg={PencilIcon}/>
        <Icon svg={SquareRegularIcon}/>
        <Icon svg={XRegularIcon}/>
      </div>

      <div>
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>
          Nova Tarefa
        </Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon}/>
        <ButtonIcon icon={TrashIcon} variant={"secondary"}/>
        <ButtonIcon icon={TrashIcon} variant={"tertiary"}/>
      </div>

    </div>
  )
}

