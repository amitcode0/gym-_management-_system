<?php
    // Establish database connection and start session
    $con = mysqli_connect("localhost", "root", "", "gym php") or die("Common.php error");
    session_start();

    // Check if the form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $memberID = $_POST['memberID'];
        $sessionID = $_POST['sessionID'];
        $attendanceDate = $_POST['attendanceDate'];
        $attendanceStatus = $_POST['attendanceStatus'];

        // Insert data into the Attendance table
        $sql = "INSERT INTO Attendance (MemberID, SessionID, AttendanceDate, AttendanceStatus) VALUES ('$memberID', '$sessionID', '$attendanceDate', '$attendanceStatus')";
        
        if (mysqli_query($con, $sql)) {
            echo "Attendance record added successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($con);
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Attendance</title>
    <style>
        /* CSS styles */
    </style>
</head>
<body>
    <div class="container">
        <h2>Add Attendance</h2>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
            <div class="form-group">
                <label for="memberID">Member ID:</label>
                <input type="text" id="memberID" name="memberID" required>
            </div>
            <div class="form-group">
                <label for="sessionID">Session ID:</label>
                <input type="text" id="sessionID" name="sessionID" required>
            </div>
            <div class="form-group">
                <label for="attendanceDate">Attendance Date:</label>
                <input type="date" id="attendanceDate" name="attendanceDate" required>
            </div>
            <div class="form-group">
                <label for="attendanceStatus">Attendance Status:</label>
                <select id="attendanceStatus" name="attendanceStatus" required>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>
