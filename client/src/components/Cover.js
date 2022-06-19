import React from "react"
import styled from "styled-components"

const StyledCover = styled.aside`
	grid-column: 1 / 7;
	outline: 1px solid white;
	aspect-ration: 1/1;
	width: 100%;

	img {
		width: 100%;
	}
`

const Cover = (props) => {
	return (
		<StyledCover>
			<img src={props.src} alt={props.alt} />
		</StyledCover>
	)
}

export default Cover
