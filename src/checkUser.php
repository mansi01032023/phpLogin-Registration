<?php
// this page is checking whether or not the user is registered with us
include_once("config.php");
if (isset($_POST)) {
    $email = $_POST['emailLogin'];
    $password = $_POST['passwordLogin'];
}
// defining the sql query for searching for respective matches with email and password
$statement = "SELECT `name`,`email` from `users` where `email`='$email' AND `password`='$password'";
$result = $conn->query($statement);

if ($result->num_rows > 0) {
    echo "<table style='border: 1px solid brown'><thead ><tr><th style='border: 1px solid brown; padding: 5px; '>Name</th><th style='border: 1px solid brown; padding: 5px;'>Email</th></tr></thead><tbody>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td style='border: 1px solid brown; padding: 5px;'>" . $row["name"] . "</td><td style='border: 1px solid brown; padding: 5px;'>" . $row["email"] . "</td></tr>";
    }
    echo "</tbody>";
}
?>
