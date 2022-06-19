import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledCard = styled.div`
	background-color: #191a1b;
	border-radius: 0.5rem;
	box-shadow: 4px 4px 20px 1px rgba(0, 0, 0, 0.25);
	aspect-ratio: 3 / 4;
	position: relative;
	/* background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); */
	a {
		display: flex;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		flex-direction: column-reverse;
		text-decoration: none;
		/* outline: 1px solid orange; */
		padding: 1rem;
		height: calc(100% - 2rem);
	}
	img {
		width: 100%;
		aspect-ratio: 1 /1;

		display: none;
		outline: none;
		border: none;
		opacity: 0;
	}
	h3 {
		font-size: 1.4rem;

		letter-spacing: 1px;
		color: white;
		margin-bottom: 0.5rem;
	}
	p {
		color: white;
		text-decoration: none !important;
		span {
			&::before {
				content: "€ ";
			}
		}
	}
`

const Card = (props) => {
	return (
		<StyledCard>
			<img alt="cover" />
			<Link to={"/tickets" + props.link}>
				<p>
					Tickets ab <span>{props.price}</span>{" "}
				</p>
				<h3>{props.title}</h3>
			</Link>
		</StyledCard>
	)
}

export default Card
