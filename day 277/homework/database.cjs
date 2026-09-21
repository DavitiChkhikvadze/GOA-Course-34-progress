const Database = require('better-sqlite3');
const db = new Database('todo.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    status TEXT DEFAULT 'active' -- 'active' or 'completed'
  );

  CREATE TABLE IF NOT EXISTS history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task_id INTEGER,
    old_title TEXT,
    new_title TEXT,
    action_type TEXT, -- 'COMPLETED' or 'RENAMED'
    changed_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

db.exec(`
  CREATE TRIGGER IF NOT EXISTS move_to_history
  AFTER UPDATE OF status ON tasks
  WHEN NEW.status = 'completed'
  BEGIN
    INSERT INTO history (task_id, old_title, action_type)
    VALUES (OLD.id, OLD.title, 'COMPLETED');
    
    DELETE FROM tasks WHERE id = OLD.id;
  END;
`);

db.exec(`
  CREATE TRIGGER IF NOT EXISTS log_title_change
  AFTER UPDATE OF title ON tasks
  BEGIN
    INSERT INTO history (task_id, old_title, new_title, action_type)
    VALUES (OLD.id, OLD.title, NEW.title, 'RENAMED');
  END;
`);

module.exports = db;