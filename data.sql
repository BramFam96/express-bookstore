DROP DATABASE IF EXISTS test_books;
CREATE DATABASE test_books;
\c test_books;
CREATE TABLE books (
  isbn TEXT PRIMARY KEY,
  amazon_url TEXT,
  author TEXT,
  language TEXT, 
  pages INTEGER,
  publisher TEXT,
  title TEXT, 
  year INTEGER
);
