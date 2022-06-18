import { useState } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"

import { useNavigate } from "react-router-dom"
const Captcha = () => {
	const sitekey = "90ac8810-80ba-42f6-abd9-c7ab8cef95e1"

	const [token, setToken] = useState(0)
	const [ekey, setEkey] = useState(0)
	let navigate = useNavigate()

	const onSubmit = (event) => {
		navigate("/tickets")
		// event.preventDefault()
	}

	return <div>Captcha</div>
}

export default Captcha
