import styled from "styled-components"
import { useState } from "react"

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

	const onSubmit = () => {
		navigate("/tickets")
		// event.preventDefault()
	}
	return (
		<StyledForm onSubmit={onSubmit}>
			<label>
				Vorname
				<input type="text" required name="firstName" />
			</label>
			<label>
				Nachname
				<input type="text" required name="lastName" />
			</label>
			<label>
				E-Mail
				<input type="email" required name="mail" />
			</label>
			<label>
				Anzahl
				<input type="number" min="1" value="1" required name="amount" />
			</label>

			<label>
				AGB
				<input type="checkbox" required name="termsCondition" />
			</label>
			<label>
				<input type="submit" required />
			</label>
			{props.children}
		</StyledForm>
	)
}

export default Form
