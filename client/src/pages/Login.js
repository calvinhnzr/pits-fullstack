import { useState } from "react"
import Title from "../components/Title"
import Form from "../components/Form"
import Layout from "../components/Layout"

const Login = () => {
	const [username, setUsername] = useState("")

	const [password, setPassword] = useState("")

	function onSubmit() {
		console.log("hello there")
	}

	return (
		<>
			<Layout>
				<Title>Login 👤</Title>
				<Form onSubmit={onSubmit}>
					<label>
						Username
						<input
							type="text"
							required
							name={`firstName`}
							value={username}
							placeholder="calvin"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>

					<label>
						Password
						<input
							type="Password"
							required
							name={`password`}
							value={password}
							placeholder="123456"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<label>
						<input
							type="submit"
							style={{
								background:
									"linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)",
							}}
						/>
					</label>
				</Form>
			</Layout>
		</>
	)
}

export default Login
