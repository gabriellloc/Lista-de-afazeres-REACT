import Badge from "../components/badge";
import Button from "../components/Button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icons";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";

import Text from "../components/text";

import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react"
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import SpinnerIcon from "../assets/icons/mynaui_spinner.svg?react"
import XIcon from "../assets/icons/X-Regular.svg?react"

export default function PageComponents() {
	return (
		<Container>
			<div className="grid gap-10">
				<div className="flex flex-col gap-2">
					<Text variant={"body-sm-bold"}>Hello world!</Text>
					<Text variant={"body-md"}>Hello world!</Text>
					<Text variant={"body-md-bold"}>Hello world!</Text>
					<Text>Hello world!</Text>
				</div>

				<div className="flex gap-1">
					<Icon svg={TrashIcon}/>
					<Icon svg={CheckIcon}/>
					<Icon svg={PencilIcon}/>
					<Icon svg={PlusIcon}/>
					<Icon svg={SpinnerIcon} animate/>
					<Icon svg={XIcon} />
				</div>

				<div className="flex gap-1">
					<Badge variant={"secondary"}>5</Badge>
					<Badge variant={"primary"}>2 de 5</Badge>
					<Badge loading>5</Badge>
				</div>

				<div>
					<Button icon={PlusIcon} disabled={true}>Nova tarefa</Button>
					<Button icon={PlusIcon} disabled={false}>Nova tarefa</Button>
				</div>

				<div className="flex gap-1">
					<ButtonIcon icon={TrashIcon} />
					<ButtonIcon icon={TrashIcon} variant={"secondary"} />
					<ButtonIcon icon={TrashIcon} variant={"tertiary"} />
					<ButtonIcon icon={TrashIcon} loading />
				</div>

				<div>
					<InputText />
				</div>

				<div>
					<InputCheckbox />

					<InputCheckbox loading />
				</div>

				<div>
					<Card size={"md"}>Hello world</Card>
				</div>

				<div className="space-y-2">
					<Skeleton className="h-6" />
					<Skeleton className="h-6" />
					<Skeleton className="w-96 h-6" />
				</div>
			</div>
		</Container>
  )
}