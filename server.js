const express = require("express")

const app = express()
var useragent = require("express-useragent")

app.use(useragent.express())

app.get("/api", (req, res) => {
	res.send(req.useragent)
})

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"))
}

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log("Server listen on port " + PORT))
