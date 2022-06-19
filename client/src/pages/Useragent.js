import { useState } from "react"
import Main from "../components/Main"
import Title from "../components/Title"
import Form from "../components/Form"

const Useragent = () => {
	fetch("/api/useragent")
		.then((response) => response.json())
		.then((data) => console.log(data))

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mail, setMail] = useState("")
	const [amount, setAmount] = useState(1)

	function onSubmit() {}

	return (
		<Main>
			<Title>User Agent</Title>
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
		</Main>
	)
}

export default Useragent
