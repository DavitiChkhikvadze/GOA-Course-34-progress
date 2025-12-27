const express = require("express");
const app = express();

app.use(express.json());

let todos = [
    "Buy milk",
    "Walk the dog",
    "Finish homework",
    "Learn Node.js"
];

app.post("/add", (req, res) => {
    const { task } = req.body;
    if (!task) return res.status(400).send("Task is required!");
    todos.push(task);
    res.send("Task added!");
});

app.get("/random", (req, res) => {
    if (todos.length === 0) return res.send("No tasks available!");
    const random = todos[Math.floor(Math.random() * todos.length)];
    res.send(random);
});

app.get("/all", (req, res) => {
    if (todos.length === 0) return res.send("No tasks!");
    const result = todos.map((t, i) => `${i + 1}) ${t}`).join(" | ");
    res.send(result);
});

app.get("/web", (req, res) => {
    let html = "<h1>Todo List</h1><ul>";
    todos.forEach(t => {
        html += `<li>${t}</li>`;
    });
    html += "</ul>";
    res.send(html);
});

app.delete("/delete-first", (req, res) => {
    if (todos.length === 0) return res.send("Nothing to delete!");
    const deleted = todos.shift();
    res.send(`Deleted: ${deleted}`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
}); 
