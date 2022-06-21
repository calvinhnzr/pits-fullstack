import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import img from "../images/headerBG.png"

const StyledHeader = styled.header`
	width: 100%;
	height: 20rem;
	background-color: #191a1b;
	background-size: cover;
	background-position: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	a {
		text-align: center;
		color: white;
		text-decoration: none;

		h1 {
			font-size: 3rem;
			font-weight: 700;
			letter-spacing: 1px;
			margin: 1rem 0;
		}
		h3 {
			font-size: 1.6rem;
			/* font-weight: 300; */
			letter-spacing: 1px;
			text-transform: uppercase;
		}
		span {
			font-size: 1.6rem;
			color: #a5ff7b;
			&:hover {
				text-decoration: underline #a5ff7b;
			}
		}
	}
`

const Header = () => {
	return (
		<StyledHeader style={{ backgroundImage: `url(${img})` }}>
			<Link to="/tickets/noprotection">
				<h3>Bestseller</h3>
				<h1>No Protection 🥒</h1>
				<span>Tickets ab € 0,00</span>
			</Link>
		</StyledHeader>
	)
}

export default Header
