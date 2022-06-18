import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledCard = styled.div`
	padding: 1rem;
	background-color: #191a1b;
	border-radius: 0.5rem;
	box-shadow: 4px 4px 20px 1px rgba(0, 0, 0, 0.25);
	aspect-ratio: 3 / 4;
	display: flex;
	flex-direction: column-reverse;
	img {
		width: 100%;

		outline: none;
		border: none;
		opacity: 0;
	}
	h3 {
		font-size: 1.2rem;
		letter-spacing: 1px;
	}
	p {
		span {
			&::before {
				content: "€ ";
			}
		}
	}
`

const Card = (props) => {
	return (
		<Link to={"/tickets" + props.link}>
			<StyledCard>
				<p>
					Tickets ab <span>{props.price}</span>{" "}
				</p>
				<h3>{props.title}</h3>
				<img alt="cover" />
			</StyledCard>
		</Link>
	)
}

export default Card
