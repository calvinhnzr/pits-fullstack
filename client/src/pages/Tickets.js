import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import Form from "../components/Form"
import Main from "../components/Main"

const Tickets = () => {
	let navigate = useNavigate()
	let { methodName } = useParams()
	return (
		<div>
			<Main>
				Tickets {methodName}
				<Form></Form>
				{/* <button onClick={() => navigate("/")}>Click me</button> */}
			</Main>
		</div>
	)
}

export default Tickets
