import styled from "styled-components"

const StyledForm = styled.form`
	grid-column: main;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: fit-content;
	width: 20rem;
	justify-self: center;

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
			color: white;
			::placeholder,
			::-webkit-input-placeholder {
				color: white;
				opacity: 0.7;
				font-weight: 400;
				font-size: 0.8rem;
				font-family: "Roboto";
				letter-spacing: 1px;
			}
			&:focus {
				color: white;
			}
			&[type="number"] {
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
				padding: 0;
				width: 100%;
				height: 3rem;
				font-size: 1.2rem;
				font-weight: 600;
				letter-spacing: 1px;
				color: #191a1b;
				box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.55);
				/* honeypot */
				background-image: linear-gradient(
					120deg,
					#f6d365 0%,
					#fda085 100%
				);
				/* captcha */
				/* background-image: linear-gradient(
					140deg,
					#edfffb 0%,
					#6ab2b3 50%,
					#2a808e 100%
				);
				background-image: linear-gradient(
					120deg,
					#edfffb 0%,
					#00c3bf 60%,
					#0089bf 100%
				); */
				&:hover {
					cursor: pointer;
				}
			}
		}
	}
`

const Form = (props) => {
	return <StyledForm onSubmit={props.onSubmit}>{props.children}</StyledForm>
}

export default Form
