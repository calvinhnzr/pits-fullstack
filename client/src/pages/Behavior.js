import { useState, useEffect, useRef } from "react"

import Main from "../components/Main"
import Title from "../components/Title"
import Form from "../components/Form"
import Layout from "../components/Layout"
import { useNavigate } from "react-router-dom"
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

const Behavior = () => {
	const [timeStamp, setTimeStamp] = useState([])

	function getDifference(array) {
		let tempArr = []
		let temp
		for (let i = 0; i < array.length; i++) {
			temp = 0
			temp = array[i + 1] - array[i]
			temp = Math.round(temp)
			tempArr.push(temp)
		}
		tempArr.pop()
		console.log(array)
		console.log(tempArr)
	}

	function handleKeydown(e) {
		let numbersCopy = [...timeStamp]
		numbersCopy.push(e.timeStamp)
		setTimeStamp(numbersCopy)
	}

	useEffect(() => {
		window.addEventListener("keydown", handleKeydown)

		return () => {
			window.removeEventListener("keydown", handleKeydown)
		}
	}, [timeStamp])

	let navigate = useNavigate()
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mail, setMail] = useState("")
	const [amount, setAmount] = useState(1)

	function onSubmit(e) {
		getDifference(timeStamp)
		e.preventDefault()
	}

	return (
		<>
			{/* <DisplayData></DisplayData> */}
			<Layout>
				<Title>Behavior 🖱️ </Title>
				<Form onSubmit={onSubmit}>
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

export default Behavior
