import React from "react"
import styled from "styled-components"

const StyledMain = styled.main`
	max-width: 1024px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
`

const Main = (props) => {
	return <StyledMain>{props.children}</StyledMain>
}

export default Main
