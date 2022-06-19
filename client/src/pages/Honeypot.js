import { useState } from "react"
import { makeid } from "../helpers/makeid"
import Main from "../components/Main"
import Title from "../components/Title"
import Form from "../components/Form"
import styled from "styled-components"
// https://dev.to/felipperegazio/how-to-create-a-simple-honeypot-to-protect-your-web-forms-from-spammers--25n8
// features: random hash, honeypot input fields

const StyledHoney = styled.label`
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	height: 0;
	width: 0;
	z-index: -1;
`

const Honeypot = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mail, setMail] = useState("")
	const [amount, setAmount] = useState(1)

	return (
		<Main>
			<Title>Honeypot</Title>
			<Form isHoneypot={true}>
				<StyledHoney htmlFor="name">
					<input
						autoComplete="off"
						type="text"
						id="name"
						name="name"
						placeholder="Your name here"
					/>
				</StyledHoney>
				<StyledHoney htmlFor="email">
					<input
						autoComplete="off"
						type="email"
						id="email"
						name="email"
						placeholder="Your e-mail here"
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
					<input type="submit" />
				</label>
			</Form>
		</Main>
	)
}

export default Honeypot
