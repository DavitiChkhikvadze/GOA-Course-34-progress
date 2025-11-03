const express = require("express");
const app = express();
const PORT = 3002;

app.use((req, res) => {
  const info = {
    method: req.method,
    time: new Date().toLocaleString(),
  };
  res.status(200).json(info);
});

app.listen(PORT, () => {
  console.log(`Server 3 გაშვებულია პორტზე ${PORT}`);
});

app.use((req, res) => {
  res.status(404).send("გვერდი ვერ მოიძებნა");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("შიდა სერვერული შეცდომა");
});
