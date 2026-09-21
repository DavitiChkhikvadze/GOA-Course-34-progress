const DATABASE = require("better-sqlite3")
const db = new DATABASE("nga.db")
const express = require("express")
const app = express()

db.exec(`
  CREATE TABLE IF NOT EXISTS sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_name TEXT,
    category TEXT,
    amount REAL
  )
`);

app.get("/", (req, res) => {
    const stats = db.prepare(`
        SELECT category, 
               COUNT(*) as count, 
               SUM(amount) as total_sum, 
               AVG(amount) as average
        FROM sales
        GROUP BY category
        HAVING total_sum > 100
    `).all();

    const allRows = db.prepare("SELECT * FROM sales ORDER BY id DESC LIMIT 10").all();

    res.send(`
        <h1>nga website</h1>
        
        <div>
            <h2>add data</h2>
            <form action="/add" method="POST">
                <input name="product" placeholder="product" required>
                <select name="category">
                    <option value="Electronics">Electronics</option>
                    <option value="Food">Food</option>
                    <option value="Service">Service</option>
                </select>
                <input name="amount" type="number" placeholder="priece" required>
                <button type="submit">add ts</button>
            </form>
            <form action="/random" method="POST" style="margin-top:10px;">
                <button type="submit" style="background: #e1e1e1;">Random addition</button>
            </form>
        </div>

        <h2>analytics (sum > 100)</h2>
        <table border="1" cellpadding="10">
            <tr><th>category</th><th>amount</th><th>sum</th><th>medium</th></tr>
            ${stats.map(s => `<tr><td>${s.category}</td><td>${s.count}</td><td>${s.total_sum}</td><td>${s.average.toFixed(2)}</td></tr>`).join('')}
        </table>

        <h3>last 10 written data</h3>
        <ul>
            ${allRows.map(r => `<li>${r.product_name} (${r.category}) - ${r.amount} GEL</li>`).join('')}
        </ul>
    `);
});

app.post("/add", (req, res) => {
    const { product, category, amount } = req.body;
    db.prepare("INSERT INTO sales (product_name, category, amount) VALUES (?, ?, ?)").run(product, category, amount);
    res.redirect("/");
});

app.post("/random", (req, res) => {
    const categories = ["Electronics", "Food", "Service"];
    const randomCat = categories[Math.floor(Math.random() * categories.length)];
    const randomAmount = Math.floor(Math.random() * 200);
    db.prepare("INSERT INTO sales (product_name, category, amount) VALUES (?, ?, ?)").run("Item " + Date.now(), randomCat, randomAmount);
    res.redirect("/");
});

app.listen(3000, () => console.log("Server turned on: http://localhost:3000"));
