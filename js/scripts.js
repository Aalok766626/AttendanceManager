$(document).ready(function(){
   $("#loginBtn").click(function(){
       $("#login").modal('show');
   });
});

$(document).ready(function(){
   setTimeout(function(){
      $("#someidlikeloginabove").modal('show');
   },1500);
});

$(document).ready(function(){
   $("#registerBtn").click(function(){
       $("#registeration").modal('show');
   });
});
