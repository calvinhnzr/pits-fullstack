import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
	width: 100%;
	height: 20rem;
	background-color: #191a1b;
	display: flex;
	align-items: center;
	justify-content: center;
	h4 {
		font-size: 3rem;
	}
`

const Header = () => {
	return (
		<StyledHeader>
			<h4>Tickets!</h4>
		</StyledHeader>
	)
}

export default Header
