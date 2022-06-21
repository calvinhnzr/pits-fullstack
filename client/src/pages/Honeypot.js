import { useState, useEffect } from "react"
import { makeid } from "../helpers/makeid"
import Title from "../components/Title"
import Form from "../components/Form"
import Markdown from "../components/Markdown"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import honeypotMD from "../markdown/honeypot.md"
import img from "../images/honeypotBG.png"
import Layout from "../components/Layout"
// https://dev.to/felipperegazio/how-to-create-a-simple-honeypot-to-protect-your-web-forms-from-spammers--25n8
// features: random hash, honeypot input fields

const StyledHoney = styled.label`
	font-weight: bold;
	letter-spacing: 1px;
	display: inline;
	font-weight: 300;
	margin-bottom: 0.5rem;
	span {
		color: #f6d365;
		display: inline;
		width: fit-content;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}
	&.hidden {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		height: 0;
		width: 0;
		z-index: -1;
	}
`

const StyledHoneypot = styled.label`
	cursor: pointer;
	button {
		display: none;
	}
`

const Honeypot = () => {
	let navigate = useNavigate()
	const [honeyName, setHoneyName] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mail, setMail] = useState("")
	const [amount, setAmount] = useState(1)

	function onSubmit(e) {
		if (!honeyName) {
			navigate("/success")
		} else {
			navigate("/failure")
		}
		e.preventDefault()
	}

	const [markdown, setMarkdown] = useState("")

	useEffect(() => {
		fetch(honeypotMD)
			.then((response) => response.text())
			.then((result) => setMarkdown(result))
	}, [honeypotMD])

	const [toggleHoneyBot, setToggleHoneyBot] = useState(false)

	function handleClick() {
		setToggleHoneyBot(!toggleHoneyBot)
	}

	return (
		<>
			<Layout img={img}>
				<Title>
					Honeypot{" "}
					<StyledHoneypot>
						🍯
						<button onClick={handleClick}>click</button>
					</StyledHoneypot>
				</Title>

				<Form onSubmit={onSubmit}>
					<StyledHoney
						htmlFor="name"
						className={toggleHoneyBot ? "" : "hidden"}>
						<span>Honeypot</span> Als Mensch bitte nicht ausfüllen.
						<input
							autoComplete="off"
							type="text"
							id="name"
							name="name"
							placeholder="Your Honeyname"
							value={honeyName}
							onChange={(e) => setHoneyName(e.target.value)}
						/>
					</StyledHoney>
					<label>
						Vorname
						<input
							type="text"
							required
							name={`firstName${makeid(5)}`}
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
							name={`lastName${makeid(5)}`}
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
							name={`mail${makeid(5)}`}
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
									"linear-gradient( 120deg,	#f6d365 0%,#fda085 100%)",
							}}
						/>
					</label>
				</Form>
			</Layout>
			{/* <Markdown>{markdown}</Markdown> */}
		</>
	)
}

export default Honeypot
