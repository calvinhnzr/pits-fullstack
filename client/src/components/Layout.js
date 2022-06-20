import React from "react"
import styled from "styled-components"

const StyledLayout = styled.main`
	display: grid;
	overflow-x: hidden;
	grid-template-columns:
		[full-start] minmax(2rem, 1fr)
		[main-start] minmax(0, 1024px) [main-end]
		minmax(2rem, 1fr) [full-end];

	background: no-repeat center center / cover;
	background-position: center;
	position: relative;
	gap: 2rem 0;
	align-content: start;
	height: calc(100vh - 7rem);
`

const Layout = (props) => {
	return (
		<StyledLayout style={{ backgroundImage: `url(${props.img})` }}>
			{props.children}
		</StyledLayout>
	)
}

export default Layout
