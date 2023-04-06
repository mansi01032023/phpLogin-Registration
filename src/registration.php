<?php
include_once("./config.php");
// setting the variables with their respective fields
if(isset($_POST)){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];
}
// defining the sql statement to insert values into the db
    $statement = "INSERT INTO `users`(`id`, `name`, `email`, `password`, `confirmPassword`) VALUES (NULL, '$name', '$email', '$password', '$confirmPassword')";
    if($conn -> query($statement) === true && $password == $confirmPassword){
        echo true;
    }else{
        echo false;
    }
?>
