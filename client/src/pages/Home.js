import React from "react"

import Header from "../components/Header"
import Gallery from "../components/Gallery"
import Card from "../components/Card"
import Main from "../components/Main"

const Home = () => {
	return (
		<div>
			<Header />
			<Gallery>
				<Card title="Honeypot" price="8,00" link="/honeypot" />
				<Card title="Captcha" price="16,00" link="/captcha" />
				<Card title="User Agent" price="32,00" link="/useragent" />
				<Card title="Behavoir" price="64,00" link="/behavoir" />
				{/* <Card title="All" /> */}
			</Gallery>
		</div>
	)
}

export default Home
