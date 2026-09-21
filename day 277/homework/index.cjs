const express = require('express');
const db = require('./database');

const app = express();
app.use(express.json());

app.get('/tasks', (req, res) => {
    const tasks = db.prepare('SELECT * FROM tasks').all();
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const { title } = req.body;
    const info = db.prepare('INSERT INTO tasks (title) VALUES (?)').run(title);
    res.json({ id: info.lastInsertRowid, title, status: 'active' });
});

app.patch('/tasks/:id/complete', (req, res) => {
    const { id } = req.params;
    const result = db.prepare("UPDATE tasks SET status = 'completed' WHERE id = ?").run(id);
    
    if (result.changes > 0) {
        res.json({ message: "task completed and added to history" });
    } else {
        res.status(404).json({ error: "task not found" });
    }
});

app.patch('/tasks/:id/rename', (req, res) => {
    const { id } = req.params;
    const { newTitle } = req.body;
    db.prepare("UPDATE tasks SET title = ? WHERE id = ?").run(newTitle, id);
    res.json({ message: "name successfully changed" });
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    db.prepare('DELETE FROM tasks WHERE id = ?').run(id);
    res.json({ message: "deleted" });
});

app.get('/history', (req, res) => {
    const logs = db.prepare('SELECT * FROM history ORDER BY changed_at DESC').all();
    res.json(logs);
});

app.listen(3000, () => {
    console.log('server hosted on port 3000');
});