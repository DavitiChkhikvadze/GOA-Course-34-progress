const express = require("express");
const app = express();
const PORT = 3001;

let visitCount = 0;

app.get("/", (req, res) => {
  visitCount++;
  res.status(200).send(`მომხმარებელი ეწვია ${visitCount}-ჯერ.`);
});

app.listen(PORT, () => {
  console.log(`Server 2 გაშვებულია პორტზე ${PORT}`);
});

app.use((req, res) => {
  res.status(404).send("გვერდი ვერ მოიძებნა");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("შიდა სერვერული შეცდომა");
});
