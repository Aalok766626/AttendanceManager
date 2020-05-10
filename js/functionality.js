function validatte(){
    var roll=document.getElementById("inputemail").value;
    var pasword=document.getElementById("inputpass").value;
    var remember=document.getElementById("val").value;
    var year=document.getElementById("year").value;
    var details="Roll No.: "+roll+"\n"+"Password: "+pasword+"\n"+"Year: "+year+"\n"+"Remember me: "+remember+"\n";
    
    //window.confirm("Everything right");
   if (roll==""||roll==" ")
    { 
        alert("Invalid Roll");
    }
    if (pasword==""||pasword==" ")
    {
        alert("Invalid Password")
    }
    else
    { window.confirm("Please confirm your details."+"\n\n"+details+"\n"+"Press OK to continue...\n");}
       


}
function valuech(){
    document.getElementById("val").value="on"
}

function rollpassvalidator(){
    var roll=document.getElementById("inputemail").value;
    var pasword=document.getElementById("inputpass").value;
    
}
