import { useState, useEffect } from "react"
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

const Behavoir = () => {
	let navigate = useNavigate()
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mail, setMail] = useState("")
	const [amount, setAmount] = useState(1)

	const [ranking, setRanking] = useState(0)

	// let ranking = 0

	function onSubmit(e) {
		// console.log("onsubmit", ranking)
		if (ranking >= 10) {
			navigate("/success")
			// console.log("success ", ranking)
		} else {
			navigate("/failure")
			// console.log("failure ", ranking)
		}
		e.preventDefault()
	}

	function handleKeyDown(event) {
		if (event) {
			setRanking(ranking + 1)
			window.removeEventListener("keydown", handleKeyDown)
		}
	}

	function handleMousemove(event) {
		if (event) {
			setRanking(ranking + 1)
			window.removeEventListener("mousemove", handleMousemove)
		}
	}

	function handleTouchStart(event) {
		if (event) {
			setRanking(ranking + 1)
			window.removeEventListener("ontouchstart", handleTouchStart)
		}
	}

	function handleTouchMove(event) {
		if (event) {
			setRanking(ranking + 1)
			window.removeEventListener("ontouchmove	", handleTouchMove)
		}
	}

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown)
		window.addEventListener("mousemove", handleMousemove)
		window.addEventListener("ontouchstart", handleTouchStart)
		window.addEventListener("ontouchmove	", handleTouchMove)
		return () => {
			window.removeEventListener("keydown", handleKeyDown)
			window.removeEventListener("mousemove", handleMousemove)
			window.removeEventListener("ontouchstart", handleTouchStart)
			window.removeEventListener("ontouchmove	", handleTouchMove)
		}
	}, [ranking])

	return (
		<>
			{/* <DisplayData></DisplayData> */}
			<Layout>
				<Title>Behavoir 🖱️ </Title>
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

export default Behavoir
