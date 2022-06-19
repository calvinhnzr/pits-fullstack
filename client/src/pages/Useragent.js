import Main from "../components/Main"
import Title from "../components/Title"
import Form from "../components/Form"

const Useragent = () => {
	fetch("/api/useragent")
		.then((response) => response.json())
		.then((data) => console.log(data))

	return (
		<Main>
			<Title>User Agent</Title>
			<Form></Form>
		</Main>
	)
}

export default Useragent
