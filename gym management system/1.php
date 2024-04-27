<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $gender = $_POST["gender"];
    $dob = $_POST["dob"];
    $contact = $_POST["contact"];
    $email = $_POST["email"];
    $specialization = $_POST["specialization"];

    // Connect to MySQL database
    $host = "localhost";
    $username = "root";
    $password = "Amit@1234";
    $database = "gym";

    $conn = new mysqli($host, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL statement to insert data into the trainers table
    $sql = "INSERT INTO trainers (name, gender, dob, contact, email, specialization) 
            VALUES ('$name', '$gender', '$dob', '$contact', '$email', '$specialization')";

    // Execute SQL statement
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close database connection
    $conn->close();
}
?>
