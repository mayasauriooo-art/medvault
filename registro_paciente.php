<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Registro</title>
</head>
<body>
    <div class="app-container">
        <h3>Crear Cuenta</h3>
        <form action="procesar_registro.php" method="POST">
            <input type="hidden" name="rol" value="paciente">
            <input type="text" name="nombre" placeholder="Nombre" required>
            <input type="email" name="correo" placeholder="Correo" required>
            <input type="password" name="pass" placeholder="Contraseña" required>
            <button type="submit" class="btn-main">Registrarme</button>
        </form>
    </div>
</body>
</html>