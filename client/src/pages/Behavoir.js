import { useState, useEffect } from "react"
import Main from "../components/Main"
import Title from "../components/Title"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Markdown from "../components/Markdown"
import behavoirMD from "../markdown/behavoir.md"
import styled from "styled-components"

const DisplayData = styled.div`
	grid-column: main;
	position: absolute;
	display: flex;
	top: 1rem;
	flex-direction: column;
	span {
		margin-bottom: 1rem;
		opacity: 0.5;
	}
`

const Behavoir = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mail, setMail] = useState("")
	const [amount, setAmount] = useState(1)

	const [mousemove, setMousemove] = useState({ left: 0, top: 0 })
	const [click, setClick] = useState(0)
	function onSubmit() {}

	return (
		<>
			{/* <DisplayData></DisplayData> */}
			<Layout>
				<Title>Behavoir 🖱️ </Title>
				<Form>
					<label>
						Vorname
						<input
							type="text"
							required
							name={`firstName`}
							value={firstName}
							placeholder="Maxi"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</label>
					<label>
						Nachname
						<input
							type="text"
							required
							name={`lastName`}
							value={lastName}
							placeholder="Mustermensch"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</label>
					<label>
						E-Mail
						<input
							type="email"
							required
							name={`mail`}
							value={mail}
							placeholder="menschliche@mailadresse.com"
							onChange={(e) => setMail(e.target.value)}
						/>
					</label>
					<label>
						Anzahl
						<input
							type="number"
							min="1"
							required
							name="amount"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
						/>
					</label>
					<label>
						<input type="submit" />
					</label>
				</Form>
			</Layout>
			{/* <Markdown>{markdown}</Markdown> */}
		</>
	)
}

export default Behavoir
