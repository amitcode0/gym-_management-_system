<?php
    // Include the common.php file that establishes database connection and starts session
    include "common.php"; 

    // Check if the form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $equipmentName = $_POST["equipmentName"];
        $category = $_POST["category"];
        $quantityAvailable = $_POST["quantityAvailable"];
        
        // Insert data into the database (assuming the table name is "equipment")
        $insert_query = "INSERT INTO equipment (equipmentName, category, quantityAvailable) VALUES ('$equipmentName', '$category', '$quantityAvailable')";
        $insert_result = mysqli_query($con, $insert_query); // Execute the query

        if ($insert_result) {
            // Data inserted successfully
            echo "<script>alert('Equipment added successfully.');</script>";
        } else {
            // Error occurred while inserting data
            echo "<script>alert('Failed to add equipment.');</script>";
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Equipment</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .form-group input[type="text"],
        .form-group input[type="number"] {
            width: calc(100% - 10px);
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        .form-group input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .form-group input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Add Equipment</h2>
        <form id="equipmentForm" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <div class="form-group">
                <label for="equipmentName">Equipment Name:</label>
                <input type="text" id="equipmentName" name="equipmentName" required>
            </div>
            <div class="form-group">
                <label for="category">Category:</label>
                <input type="text" id="category" name="category" required>
            </div>
            <div class="form-group">
                <label for="quantityAvailable">Quantity Available:</label>
                <input type="number" id="quantityAvailable" name="quantityAvailable" min="0" required>
            </div>
            <div class="form-group">
                <input type="submit" value="Submit">
            </div>
        </form>
    </div>
</body>
</html>
