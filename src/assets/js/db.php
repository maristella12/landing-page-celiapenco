<?php 

header("Access-Control-Allow-Origin: *");

//set up DB
$host="";
$dbName="vocemu72_banco_1";
$user="vocemu72_tellabitt";
$password="";
$table="email";


// conn set up
$conn = new mysqli($host, $user, $password, $dbName, 3306);

// verify conn
if($conn->connect_error){
   die("Connection failed: " . $conn->connect_error);
}

// prepare and bind
$stmt = $conn->prepare("INSERT INTO $table (id,email) VALUES (?)");
$stmt->bind_param("s", $email);

// execute
if($_SERVER["REQUEST_METHOD"] == "POST"){
   $email = $_POST["email"];
   if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $stmt->execute();
      echo "Email successfully saved!";
   } else {
      echo "Invalid email"   
} else {
   echo "No email"
}

$stmt->close();
$conn->close();

}

?>