import React from "react"
import styled from "styled-components"

const StyledMain = styled.main`
	max-width: 1024px;
	margin: 2rem auto;
	display: grid;
	gap: 2rem;
	height: calc(100vh - 7rem);
	grid-template-columns: repeat(12, 1fr);
	/* outline: 1px solid green; */
	align-content: start;
`

const Main = (props) => {
	return <StyledMain>{props.children}</StyledMain>
}

export default Main
