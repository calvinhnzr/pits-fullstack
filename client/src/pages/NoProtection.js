import { useState, useEffect } from "react"
import { makeid } from "../helpers/makeid"
import Title from "../components/Title"
import Form from "../components/Form"
import Layout from "../components/Layout"
import img from "../images/cucumberBG.png"
import { useNavigate } from "react-router-dom"

const NoProtection = () => {
	let navigate = useNavigate()
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mail, setMail] = useState("")
	const [amount, setAmount] = useState(1)

	function onSubmit(e) {
		navigate("/success")
		e.preventDefault()
	}

	return (
		<>
			<Layout img={img}>
				<Title>No Protection 🥒</Title>
				<Form onSubmit={onSubmit}>
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
									"linear-gradient(-70deg, rgb(143 174 50) 0%, rgb(223 255 190) 100%)",
							}}
						/>
					</label>
				</Form>
			</Layout>
		</>
	)
}

export default NoProtection
