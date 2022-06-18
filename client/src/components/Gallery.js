import React from "react"
import styled from "styled-components"

const StyledGallery = styled.div`
	max-width: 1024px;
	width: 100%;
	margin: 0 auto;
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
	/* overflow: scroll; */
	/* outline: 1px solid red; */
`

const Gallery = (props) => {
	return <StyledGallery>{props.children}</StyledGallery>
}

export default Gallery
