import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"

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
				<Title>Bot detected!</Title>
				<Title>IPv4: {data?.IPv4}</Title>
			</Layout>
		</>
	)
}

export default Failure
