import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const StyledCard = styled.div`
	background-color: #191a1b;
	background-color: #595959;
	background-color: #484848;
	border-radius: 0.5rem;
	box-shadow: 4px 4px 20px 1px rgba(0, 0, 0, 0.25);
	aspect-ratio: 9 / 10;
	aspect-ratio: 4 / 2;
	position: relative;
	/* background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); */
	transition: 0.15s ease-in-out;
	&:hover {
		transform: translateY(-0.5rem);
	}
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
		font-size: 1.6rem;

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

const StyledLink = styled.label`
	display: flex;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	flex-direction: column-reverse;
	cursor: pointer;
	padding: 1rem;
	height: calc(100% - 2rem);
	input {
		display: none;
	}
`

const Card = (props) => {
	let navigate = useNavigate()
	return (
		<StyledCard>
			<img alt="cover" />

			{props.link ? (
				<Link to={"/tickets" + props.link}>
					<p>
						Tickets ab <span>{props.price}</span>{" "}
					</p>
					<h3>{props.title}</h3>
				</Link>
			) : (
				<StyledLink>
					<input
						type="button"
						onClick={() => navigate("/ticktes/nolink")}
					/>
					<p>
						Tickets ab <span>{props.price}</span>{" "}
					</p>
					<h3>{props.title}</h3>
				</StyledLink>
			)}
		</StyledCard>
	)
}

export default Card
