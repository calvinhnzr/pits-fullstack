import styled from "styled-components"
import { useState } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { useNavigate } from "react-router-dom"

const StyledForm = styled.form`
	grid-column: span 6;
	display: flex;
	flex-direction: column;
	label {
		display: flex;
		flex-direction: column;
	}
`

const Form = (props) => {
	let navigate = useNavigate()

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mail, setMail] = useState("")
	const [amount, setAmount] = useState(1)
	const [termsCondition, setTermsCondition] = useState(false)

	const [token, setToken] = useState(0)
	const [ekey, setEkey] = useState(0)

	const data = {
		firstName,
		lastName,
		mail,
		amount,
		termsCondition,
		token,
		ekey,
	}

	const onSubmit = (event) => {
		if (token) {
			console.log(data)
			event.preventDefault()
			// navigate("/tickets/captcha")
		}
		if (!token && !ekey) {
			alert("Füllen Sie bitte das Captcha aus.")
		}
	}

	const sitekey = "90ac8810-80ba-42f6-abd9-c7ab8cef95e1"
	// const sitekey = "10000000-ffff-ffff-ffff-000000000001"

	function handleVerificationSuccess(token, ekey) {
		setToken(token)
		setEkey(ekey)
	}

	return (
		<StyledForm onSubmit={onSubmit}>
			<label>
				Vorname
				<input
					type="text"
					required
					name="firstName"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
			</label>
			<label>
				Nachname
				<input
					type="text"
					required
					name="lastName"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			</label>
			<label>
				E-Mail
				<input
					type="email"
					required
					name="mail"
					value={mail}
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
				AGB
				<input
					type="checkbox"
					required
					name="termsCondition"
					value={termsCondition}
					onChange={(e) => setTermsCondition(e.target.value)}
				/>
			</label>
			<label>
				<input type="submit" />
			</label>
			{/* {props.children} */}
			<HCaptcha
				sitekey={sitekey}
				theme="dark"
				onVerify={(token, ekey) =>
					handleVerificationSuccess(token, ekey)
				}
			/>
		</StyledForm>
	)
}

export default Form
