import { useState, useRef } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import Form from "../components/Form"
import Title from "../components/Title"
import Layout from "../components/Layout"
import { useNavigate } from "react-router-dom"
import Markdown from "../components/Markdown"
import captchaMD from "../markdown/captcha.md"

const Captcha = () => {
	let navigate = useNavigate()

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mail, setMail] = useState("")
	const [amount, setAmount] = useState(1)
	const [captchaDone, setCaptchaDone] = useState(false)
	const [token, setToken] = useState(0)
	const [ekey, setEkey] = useState(0)

	const captchaRef = useRef(null)

	const data = {
		firstName,
		lastName,
		mail,
		amount,
		token,
		ekey,
	}

	const onSubmit = (event) => {
		if (token) {
			fetch("/api/captcha", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}).then((response) => {
				if (response.status === 200) {
					console.log("Captcha verifiziert", captchaDone)
					setCaptchaDone(() => true)
					navigate("/success")
				} else {
					console.log("Captcha nicht verifiziert", captchaDone)
					setCaptchaDone(false)
				}
			})

			captchaRef.current.resetCaptcha()
			setFirstName("")
			setLastName("")
			setMail("")
			setAmount(1)
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
		<>
			<Layout>
				<Title>Captcha 🤖</Title>

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
					{captchaDone ? <span>Captcha Done</span> : null}

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
				</Form>
			</Layout>
			{/* <Markdown>{markdown}</Markdown> */}
		</>
	)
}

export default Captcha
