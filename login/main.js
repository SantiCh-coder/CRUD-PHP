$('#formLogin').submit(function(e){
    e.preventDefault();
    var usuario = $.trim($('#usuario').val());
    var password = $.trim($('#password').val());

    if(usuario.length == 0 || password == ""){
        Swal.fire({
            icon: 'error',
            title: 'Please fill the username and/or password!',
        });
        return false;
    }else{
        $.ajax({
            url: "bd/login.php",
            type: "POST",
            datatype: "json",
            data: {usuario , password},
            success: function(data){
                if(data == "null"){
                    console.log(data);
                    Swal.fire({
                        icon: 'error',
                        title: 'Username and/or password incorrect',
                    });
                }else{
                    console.log(data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Connection established!',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Log in'
                    }).then((result) => {
                        if(result.value){
                            window.location.href = "./views/index.php";
                        }
                    });
                }
            }
        })
    }
});