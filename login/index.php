<!doctype html>
<html>
    <head>
        <link rel="shortcut icon" href="#" />
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Login con  PHP - Bootstrap 4</title>

        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="./styless.css">
        <link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">            
    </head>
    
    <body>
     <div id="login">   
         <h3 class="text-center display-4 mb-4 mt-4">Login PHP</h3>         
         <div class="container">
             <div id="login-row" class="row justify-content-center align-items-center">
                 <div id="login-column" class="col-md-6">
                     
                     <div id="login-box" class="col-md-12 text-dark">
                         <form id="formLogin" class="form" action="" method="post">
                             <h3 class="text-center text-dark">Iniciar Sesión</h3>
                             <div class="form-group">
                                 <label for="usuario" class="text-dark">Usuario</label>
                                 <input type="text" name="usuario" id="usuario" class="form-control">
                             </div>
                             <div class="form-group">
                                 <label for="password" class="text-dark">Password</label>
                                 <input type="password" name="password" id="password" class="form-control">
                             </div>
                             
                             <div class="form-gropu text-center">
                                 <input type="submit" name="submit" class="btn btn-dark btn-lg btn-block" value="Conectar">
                             </div>
                         </form>
                     </div>
                     
                 </div>
             </div>
         </div>         
     </div>        
         
     <script src="jquery/jquery-3.5.1.min.js"></script>    
     <script src="bootstrap/js/bootstrap.min.js"></script>    
     <script src="popper/popper.min.js"></script>    
        
     <script src="plugins/sweetalert2/sweetalert2.all.min.js"></script>    
     <script src="main.js"></script>    
    </body>
</html>