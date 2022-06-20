import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h2`
	grid-column: 1 / 13;
	justify-self: center;
	font-size: 3rem;
	font-weight: 700;
	letter-spacing: 1px;
	margin: 1rem 0;
`

const Title = (props) => {
	return <StyledTitle>{props.children}</StyledTitle>
}

export default Title
