import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"

const Failure = () => {
	const [data, setdata] = useState(null)

	useEffect(() => {
		fetch("https://geolocation-db.com/json/")
			.then((response) => response.json())
			.then((data) => setdata(data))
	}, [])

	return (
		<>
			<Layout>
				<Title className={"failure"}>Bot detected!</Title>
				<Subtitle>IPv4: {data?.IPv4}</Subtitle>
			</Layout>
		</>
	)
}

export default Failure
