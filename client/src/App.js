import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import About from "./pages/About"
import Home from "./pages/Home"
import Tickets from "./pages/Tickets"
import ErrorPage from "./pages/ErrorPage"
import Honeypot from "./pages/Honeypot"
import Captcha from "./pages/Captcha"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import "./App.css"

function Useragent() {
	return <div>Hallo</div>
}

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="/tickets" element={<Tickets />}>
						<Route index={true} element={<Useragent />}></Route>
						<Route path="honeypot" element={<Honeypot />} />
						<Route path="captcha" element={<Captcha />} />
						<Route path="useragent" element={<Useragent />} />
						<Route path="behavoir" element={""} />
						<Route path="all" element={""} />
					</Route>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
