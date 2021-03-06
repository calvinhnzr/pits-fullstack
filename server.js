require("dotenv").config();
const express = require("express");
const useragent = require("express-useragent");
const fetch = require("node-fetch");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.json());
app.use(useragent.express());

app.get("/api/useragent", (req, res) => {
  console.log(req.useragent.source.includes("HeadlessChrome"));
  res.send(req.useragent);
});

app.post("/api/captcha", (req, res) => {
  console.log(req.body);

  // verify captcha
  fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: `secret=${encodeURIComponent(
      process.env.HCAPTCHA_SECRET
    )}&response=${encodeURIComponent(req.body.token)}`,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success === true) {
        return res.status(200).json({ status: "ok" });
      } else {
        return res.status(404).json({ status: "error" });
      }
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server listen on port " + PORT));
