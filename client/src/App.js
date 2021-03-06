import { useEffect, useState, useRef } from "react";

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"

import Login from "./pages/Login"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Honeypot from "./pages/Honeypot"
import Captcha from "./pages/Captcha"
import Useragent from "./pages/Useragent"
import Behavior from "./pages/Behavior"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import "./styles/App.css"
import Success from "./pages/Success"
import Failure from "./pages/Failure"
import { ClientJS } from "clientjs"
import NoProtection from "./pages/NoProtection"

function App() {
	const [botDetected, setBotDetected] = useState(false)

	useEffect(() => {
		// https://antoinevastel.com/bot%20detection/2018/01/17/detect-chrome-headless-v2.html
		if (/HeadlessChrome/.test(window.navigator.userAgent)) {
			console.log("Chrome headless detected")
			setBotDetected(true)
		}
		if (navigator.webdriver) {
			console.log("Chrome headless detected")
			setBotDetected(true)
		}
		if (navigator.plugins.length === 0) {
			console.log("It may be Chrome headless")
			setBotDetected(true)
		}
		if (navigator.languages === "") {
			console.log("Chrome headless detected")
			setBotDetected(true)
		}
		navigator.permissions
			.query({ name: "notifications" })
			.then(function (permissionStatus) {
				if (
					Notification.permission === "denied" &&
					permissionStatus.state === "prompt"
				) {
					console.log("This is Chrome headless")
					setBotDetected(true)
				} else {
					console.log("This is not Chrome headless")
					setBotDetected(false)
				}
			})
	}, [])

	return (
		<Router>
			<div className="App">
				{botDetected && <Navigate replace to="/failure" />}
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="success" element={<Success />} />
					<Route path="failure" element={<Failure />} />
					<Route path="/tickets">
						<Route path="honeypot" element={<Honeypot />} />
						<Route path="captcha" element={<Captcha />} />
						<Route path="useragent" element={<Useragent />} />
						<Route path="behavior" element={<Behavior />} />
						<Route path="noprotection" element={<NoProtection />} />
						<Route path="all" element={""} />
					</Route>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				{/* <Footer /> */}
			</div>
		</Router>
	)
}

export default App;
