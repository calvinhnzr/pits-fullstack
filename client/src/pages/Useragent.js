import React from "react"

const Useragent = () => {
  fetch("/api/useragent")
		.then((response) => response.json())
		.then((data) => console.log(data))

	return <div>Useragent</div>
}

export default Useragent
