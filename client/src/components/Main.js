import React from "react"
import styled from "styled-components"

const StyledMain = styled.main`
	max-width: 1024px;
	margin: 3rem auto;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(12, 1fr);
	/* outline: 1px solid green; */
	> * {
		/* outline: 1px solid white; */
	}
`

const Main = (props) => {
	return <StyledMain>{props.children}</StyledMain>
}

export default Main
