import styled from "styled-components"

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
	return <StyledForm onSubmit={props.onSubmit}>{props.children}</StyledForm>
}

export default Form
