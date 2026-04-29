<?php
// Conexión a la base de datos medv
$conn = mysqli_connect("localhost", "root", "", "medv");

if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
}
?>