import React from "react"
import styled from "styled-components"

const StyledSubTitle = styled.h5`
	grid-column: 1 / 13;
	justify-self: center;
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 1px;
	text-align: center;
	line-height: 1.3;
`

const Subtitle = (props) => {
	return <StyledSubTitle>{props.children}</StyledSubTitle>
}

export default Subtitle
