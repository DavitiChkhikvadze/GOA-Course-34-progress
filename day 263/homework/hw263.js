import Database from 'better-sqlite3';

const db = new Database('data.db');

db.prepare(`CREATE TABLE IF NOT EXISTS Authors (
    author-id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    birth_year INTEGER CHECK (birth_year > 0),
    country TEXT NOT NULL
)`).run()

db.prepare(`CREATE TABLE IF NOT EXISTS Books (
    book-id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    public_year INTEGER CHECK (public_year > 0),
    genre TEXT,
    FOREIGN KEY (author_id) REFERENCES Authors(author_id)
)`).run()
// აქ გვაქვს book_id ეს უკავშირდება Loans ცხრილს 
db.prepare(`CREATE TABLE IF NOT EXISTS Members (
    member-id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    join_date TEXT DEFAULT (DATE('now'))
)`).run()

db.prepare(`CREATE TABLE IF NOT EXISTS Loans (
    loan-id INTEGER PRIMARY KEY,
    book-id INTEGER PRIMARY KEY,
    member-id INTEGER PRIMARY KEY,
    loan_date TEXT DEFAULT (DATE('now')),
    return_date TEXT,
    FOREIGN KEY (book_id) REFERENCES Books(book_id)
    FOREIGN KEY (member_id) REFERENCES Members(member_id)
)`).run()
// ეს უკავშირდება books და members ცხრილს