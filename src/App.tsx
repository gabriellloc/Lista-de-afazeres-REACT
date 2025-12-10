import Text from "./components/text";

export default function App() {
  return (
		<div className="flex flex-col gap-2">
			<Text variant={"body-sm-bold"}>Hello world!</Text>
			<Text variant={"body-md"}>Hello world!</Text>
			<Text variant={"body-md-bold"}>Hello world!</Text>
			<Text>Hello world!</Text>
		</div>
  )
}
