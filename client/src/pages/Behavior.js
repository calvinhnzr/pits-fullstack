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
	right: 0;

	/* top: 1.9rem; */
	color: white;
	text-align: right;
	span {
		font-size: 1.5rem;
		margin-top: 0.5rem;
	}
`

const Behavior = () => {
	const [timeStamp, setTimeStamp] = useState([])
	const [myscore, setmyscore] = useState(0)
	function getDifference(array) {
		// array mit Differenzen zwischen den Keypresses
		let tempArr = []
		let temp

		for (let i = 0; i < array.length - 1; i++) {
			temp = 0
			temp = array[i + 1] - array[i]
			temp = Math.round(temp)
			tempArr.push(temp)
		}
		// console.log(tempArr)
		return tempArr
	}

	function getLinearRegression(newArr) {
		let i = 0
		let sum = 0
		let len = newArr.length
		let mittelwert = 0
		while (i < len) {
			sum = sum + newArr[i++]
		}
		mittelwert = sum / len
		let lineareAbweichung = 0
		for (let j = 0; j < newArr.length; j++) {
			lineareAbweichung += Math.abs(newArr[j] - mittelwert)
		}
		lineareAbweichung *= 1 / newArr.length
		// console.log(mittelwert)
		// console.log(lineareAbweichung)
		return lineareAbweichung
	}

	function handleKeydown(e) {
		let numbersCopy = [...timeStamp]
		numbersCopy.push(e.timeStamp)
		setTimeStamp(numbersCopy)

		//
		setmyscore(getLinearRegression(getDifference(timeStamp)))
	}

	const [markdown, setMarkdown] = useState("")

	useEffect(() => {
		fetch(behavoirMD)
			.then((response) => response.text())
			.then((result) => setMarkdown(result))
		window.addEventListener("keydown", handleKeydown)

		return () => {
			window.removeEventListener("keydown", handleKeydown)
		}
	}, [timeStamp, behavoirMD])

	let navigate = useNavigate()
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mail, setMail] = useState("")
	const [amount, setAmount] = useState(1)

	function onSubmit(e) {
		let score = getLinearRegression(getDifference(timeStamp))
		score = Math.round(score)
		console.log("final score: ", score)
		if (score > 10) {
			navigate("/success")
		} else {
			navigate("/failure")
		}
		e.preventDefault()
	}

	return (
		<>
			<Layout>
				<Title>Behavior 🖱️ </Title>
				<DisplayData>
					LR:{" "}
					<span
						style={
							Math.round(myscore) > 10
								? { color: "#aafc83" }
								: { color: "#e03d3d" }
						}>
						{Math.round(myscore)}
					</span>
				</DisplayData>
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
							// required
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
						<input
							type="submit"
							style={{
								background:
									"linear-gradient(to top,#cfd9df 0%, #e2ebf0 100%)",
							}}
						/>
					</label>
				</Form>
			</Layout>
			{/* <Markdown>{markdown}</Markdown> */}
		</>
	)
}

export default Behavior
