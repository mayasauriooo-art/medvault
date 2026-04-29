<?php
include 'conexion.php'; // Tu conexión a 'medv'

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $pass = password_hash($_POST['pass'], PASSWORD_DEFAULT);
    $rol = $_POST['rol']; // Para que sirva para ambos

    $sql = "INSERT INTO usuarios (nombre, correo, password, rol) VALUES ('$nombre', '$correo', '$pass', '$rol')";
    
    if (mysqli_query($conn, $sql)) {
        // Si sale bien, lo mandamos de regreso a una página limpia
        echo "<script>alert('Registro exitoso'); window.location='index.php';</script>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>