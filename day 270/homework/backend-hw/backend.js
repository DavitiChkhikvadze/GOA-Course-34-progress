const Database = require('better-sqlite3');
const db = new Database(':memory:');
db.prepare(`
  CREATE TABLE sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product TEXT,
    category TEXT,
    amount REAL
  )
`).run();

const addSale = db.prepare('INSERT INTO sales (product, category, amount) VALUES (?, ?, ?)');

const insertData = () => {
    addSale.run('Apple', 'Fruit', 10.5);
    addSale.run('Banana', 'Fruit', 5.2);
    addSale.run('Laptop', 'Tech', 1200.0);
    addSale.run('Mouse', 'Tech', 25.0);
    addSale.run('Orange', 'Fruit', 3.0);
    console.log("მონაცემები წარმატებით დაემატა");
};

insertData();

const getAnalytics = () => {
    const query = `
        SELECT category, SUM(amount) AS total_sales
        FROM sales
        GROUP BY category
        HAVING total_sales > 20
    `;
    
    const statement = db.prepare(query);
    const results = statement.all();

    console.log("--- ანალიტიკური ანგარიში (ჯამური გაყიდვები > 20) ---");
    results.forEach(row => {
        console.log(`კატეგორია: ${row.category} | ჯამი: ${row.total_sales}`);
    });
};

getAnalytics();