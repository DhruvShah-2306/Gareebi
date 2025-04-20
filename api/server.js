const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MySQL DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // Your username
  password: 'mysql123',  // Your password
  database: 'gareebi_db' // Your DB name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// POST endpoint to save donations to both JSON and MySQL
app.post('/donate', (req, res) => {
  const donation = req.body;

  // Store in donations.json (optional)
  const donationsFilePath = path.join(__dirname, 'donations.json');
  fs.readFile(donationsFilePath, 'utf8', (err, data) => {
    const donations = err ? [] : JSON.parse(data || '[]');
    donations.push(donation);
    fs.writeFile(donationsFilePath, JSON.stringify(donations, null, 2), 'utf8', () => {});
  });

  // Insert into MySQL
  const { name, email, phone, item, description, address } = donation;
  const sql = `INSERT INTO donations (name, email, phone, item, description, address)
               VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sql, [name, email, phone, item, description, address], (err, result) => {
    if (err) {
      console.error('MySQL Error:', err);
      return res.status(500).json({ message: 'Error saving to database.' });
    }
    res.status(200).json({ message: 'Donation submitted successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Close the DB connection when the app is terminated