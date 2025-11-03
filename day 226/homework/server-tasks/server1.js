const express = require("express");
const app = express();
const PORT = 3000;

app.all("*", (req, res) => {
  res.status(200).send("გამარჯობა!");
});

app.listen(PORT, () => {
  console.log(`Server 1 გაშვებულია პორტზე ${PORT}`);
});

app.use((req, res) => {
  res.status(404).send("გვერდი ვერ მოიძებნა");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("შიდა სერვერული შეცდომა");
});
