const express = require("express");
const app = express();

app.use(express.json());

let movies = [
  { id: 1, title: "cars", rating: 10 },
  { id: 2, title: "gran turismo", rating: 8.5 },
  { id: 3, title: "the f1 movie", rating: 7.8 }
];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return res.status(404).send("Movie not found");
  }

  res.json(movie);
});

app.get("/search", (req, res) => {
  const title = req.query.title?.toLowerCase();

  const result = movies.filter(m =>
    m.title.toLowerCase().includes(title)
  );

  res.json(result);
});

app.post("/movies", (req, res) => {
  const { title, rating } = req.body;

  const newMovie = {
    id: movies.length + 1,
    title,
    rating
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

app.delete("/movies/:id", (req, res) => {
  const id = Number(req.params.id);

  movies = movies.filter(m => m.id !== id);

  res.send("Movie deleted");
});

app.get("/rating", (req, res) => {
  const min = Number(req.query.min);
  const max = Number(req.query.max);

  const filtered = movies.filter(m =>
    m.rating >= min && m.rating <= max
  );

  res.json(filtered);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
