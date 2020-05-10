$(document).ready(function(){
        setTimeout(function(){
           $("#login").modal('show');
        },1500);
    });


$(document).ready(function(){
    $("#loginBtn").click(function(){
        $("#login").modal('show');
    });
});
