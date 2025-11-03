const express = require("express");
const app = express();
const PORT = 3003;

let history = [];

app.use((req, res, next) => {
  const date = new Date().toISOString().split("T")[0];
  const log = `${req.method}: ${date} - 200`;
  history.push(log);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json(history);
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("სერვერზე მოხდა შეცდომა");
});

app.listen(PORT, () => {
  console.log(`Server 4 გაშვებულია პორტზე ${PORT}`);
});

app.use((req, res) => {
  res.status(404).send("გვერდი ვერ მოიძებნა");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("შიდა სერვერული შეცდომა");
});
