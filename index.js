const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/loader", (req, res) => {
  res.type("text/plain");
  res.send(`loadstring(game:HttpGet("https://raw.githubusercontent.com/businessmanalex88-stack/BypassWhoAmI/main/Radiant.lua"))()`);
});

app.listen(port, () => {
  console.log("Loader is running");
});
