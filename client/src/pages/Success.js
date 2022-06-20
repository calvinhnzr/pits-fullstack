import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"

const Success = () => {
	return (
		<>
			<Layout>
				<Title className={"success"}>Form submitted!</Title>
				<Subtitle>congrats...</Subtitle>
			</Layout>
		</>
	)
}

export default Success
