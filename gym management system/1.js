// Require necessary modules
const express = require("express");
const mysql = require("mysql");

// Create an Express application
const app = express();

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Amit@1234",
  database: "gym",
});

// Serve static files (HTML, CSS, JS) from a directory named 'public'
app.use(express.static("public"));

// Handle form submissions
app.post("/submit_member", (req, res) => {
  // Parse incoming data
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });

  // When all data is received
  req.on("end", () => {
    const formData = new URLSearchParams(data);

    // Extract form fields
    const name = formData.get("name");
    const gender = formData.get("gender");
    const dob = formData.get("dob");
    const contact = formData.get("contact");
    const email = formData.get("email");
    const address = formData.get("address");

    // Insert data into the database
    pool.query(
      "INSERT INTO members (name, gender, dob, contact, email, address) VALUES (?, ?, ?, ?, ?, ?)",
      [name, gender, dob, contact, email, address],
      (err, result) => {
        if (err) {
          console.error("Error inserting data:", err);
          res.status(500).send("Error inserting data into the database");
          return;
        }
        console.log("Data inserted successfully");
        res.status(200).send("Data inserted successfully");
      }
    );
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
