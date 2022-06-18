import React from "react"
import { Link } from "react-router-dom"

import styled from "styled-components"

const StyledNav = styled.nav`
	max-width: 1024px;
	margin: 0 auto;
	padding: 2rem 0;
	ul {
		display: flex;
		list-style: none;
		gap: 2rem;
		li {
			a {
				color: white;
				font-weight: 400;
				letter-spacing: 1px;
			}
		}
	}
`

const Nav = () => {
	return (
		<StyledNav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/tickets">Tickets</Link>
				</li>
			</ul>
		</StyledNav>
	)
}

export default Nav
