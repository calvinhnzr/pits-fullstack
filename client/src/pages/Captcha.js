import { useState } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import Main from "../components/Main"
import Form from "../components/Form"

const Captcha = () => {
	const sitekey = "90ac8810-80ba-42f6-abd9-c7ab8cef95e1"

	const [token, setToken] = useState(0)
	const [ekey, setEkey] = useState(0)

	function handleVerificationSuccess(token, ekey) {
		setToken(token)
		setEkey(ekey)
		console.log(ekey, token)
	}

	return (
		<Main>
			<Form>
				<HCaptcha
					sitekey={sitekey}
					onVerify={(token, ekey) =>
						handleVerificationSuccess(token, ekey)
					}
				/>
			</Form>
		</Main>
	)
}

export default Captcha
