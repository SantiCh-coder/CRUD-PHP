<?php
    session_start();
    include('connection.php');

    //Recepcion de datos enviados por el metodo POST desde ajax
    $usuario = (isset($_POST['usuario']) ? $_POST['usuario'] : "");
    $password = (isset($_POST['password']) ? $_POST['password'] : "");

    $pass = md5($password); //Encripto la clave enviada por el usuario y luego para compararla con la clave encriptada y almacenada en la base de datos

    $query = "SELECT * FROM usuarios WHERE usuario='$usuario' AND password='$pass'";
    $result = mysqli_query($connection, $query);

    if ($result) {
        $data = mysqli_fetch_assoc($result);
        $_SESSION['s_usuario'] = $usuario;
    }else{
        $data = null;
        $_SESSION['s_usuario'] = null;
    }
    print json_encode($data);
    mysqli_free_result($result);
    mysqli_close($connection);
?>