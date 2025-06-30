import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react"

export default function TaskItem(){

    return (
        <Card size={"md"} className="flex items-center gap-3">
            <InputCheckbox/>
            <Text>🛒 Fazer compras da semana</Text>
            <div className="fle gap-1">
                <ButtonIcon icon={TrashIcon}/>
                <ButtonIcon icon={PencilIcon}/>
            </div>
        </Card>
    )
}