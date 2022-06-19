import styled from "styled-components"
import { useState, useRef } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { useNavigate } from "react-router-dom"

const StyledForm = styled.form`
	grid-column: 5 / 9;
	display: flex;
	flex-direction: column;
	/* justify-self: center; */
	/* outline: 1px solid red; */
	width: 100%;
	label {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		font-size: 0.9rem;
		input {
			margin-top: 0.5rem;
			border-radius: 0.75rem;
			border: 3px solid #3c3c3c;
			height: 2.5rem;
			background-color: #212324;
			padding-left: 1rem;
			::placeholder,
			::-webkit-input-placeholder {
				color: white;
				opacity: 0.7;
				font-weight: 400;
				font-size: 0.8rem;
				font-family: "Roboto";
				letter-spacing: 1px;
			}
			&[type="number"] {
				margin-bottom: 1rem;
				padding-right: 0.5rem;
				color: white;
				opacity: 0.7;
				font-weight: 400;
				font-size: 0.8rem;
				font-family: "Roboto";
				letter-spacing: 1px;
			}
			&[type="submit"] {
				margin-top: 2rem;
				border: none;

				width: 100%;
				height: 3rem;
				font-size: 1.2rem;
				font-weight: 600;
				letter-spacing: 1px;
				color: #191a1b;
				box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.55);
				background-image: linear-gradient(
					120deg,
					#f6d365 0%,
					#fda085 100%
				);
				&:hover {
					cursor: pointer;
				}
			}
		}
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

	const captchaRef = useRef(null)

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
			// console.log(data);

			fetch("/api/captcha", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}).then((response) => {
				if (response.status === 200) {
					console.log("Captcha verifiziert")
				} else {
					console.log("Captcha nicht verifiziert")
				}
			})

			captchaRef.current.resetCaptcha()
			setFirstName("")
			setLastName("")
			setMail("")
			setAmount(1)
			setTermsCondition(false)
			setToken(0)
			setEkey(0)
		}

		if (!token && !ekey) {
			alert("Füllen Sie bitte das Captcha aus.")
		}

		event.preventDefault()
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
					placeholder="Maxi"
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
					placeholder="Mustermensch"
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

			{/* {props.children} */}
			<HCaptcha
				ref={captchaRef}
				sitekey={sitekey}
				theme="dark"
				onVerify={(token, ekey) =>
					handleVerificationSuccess(token, ekey)
				}
			/>
			<label>
				<input type="submit" />
			</label>
		</StyledForm>
	)
}

export default Form