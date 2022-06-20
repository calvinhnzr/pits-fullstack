import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h2`
	grid-column: 1 / 13;
	justify-self: center;
	font-size: 3rem;
	font-weight: 700;
	letter-spacing: 1px;
	margin: 1rem 0;
	&.success {
		color: #aafc83;
	}
	&.failure {
		color: #e03d3d;
	}
`

const Title = (props) => {
	return (
		<StyledTitle className={props ? props.className : "test"}>
			{props.children}
		</StyledTitle>
	)
}

export default Title
