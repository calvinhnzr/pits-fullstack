import { useEffect, useState, useRef } from "react"

import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import Card from "../components/Card"
import Main from "../components/Main"
import styled from "styled-components"

const Title = styled.h3`
	font-size: 2.5rem;
	grid-column: 1 / 13;
	font-weight: 500;
	letter-spacing: 1px;
	/* margin: 2rem 0 0; */
`

const Home = () => {
	return (
		<div>
			<Header />
			<Main>
				{/* <Title>Bestseller</Title>
				<Gallery>
					<Card
						title="No Protection 🥒"
						price="0,00"
						link="/noprotection"
					/>
				</Gallery> */}
				<Title>Empfehlungen</Title>
				<Gallery>
					{/* <Card title="Alles" price="100,00" link="/alles" /> */}

					<Card title="Captcha 🤖" price="16,00" link="/captcha" />
					{/* <Card title="User Agent" price="32,00" link="/useragent" /> */}
					<Card title="Behavior 🖱️" price="32,00" link="/behavior" />
					<Card title="Honeypot 🍯" price="8,00" link="/honeypot" />
					{/* <Card title="Not a Link ⚓" price="64,00" link={false} /> */}
				</Gallery>
			</Main>
		</div>
	)
}

export default Home
