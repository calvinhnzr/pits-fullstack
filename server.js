import express from "express"

const app = express()

app.get("/api", (req, res) => {
  const users = [
    "user1",
    "user2",
    "user3"
  ]
  res.json(users)
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log("Server listen on port " + PORT))