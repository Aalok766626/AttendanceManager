function validatte(){
    var roll=document.getElementById("inputemail").value;
    var pasword=document.getElementById("inputpass").value;
    var remember=document.getElementById("val").value;
    var year=document.getElementById("year").value;
    var details="Roll No.: "+roll+"\n"+"Password: "+pasword+"\n"+"Year: "+year+"\n"+"Remember me: "+remember+"\n";
    if(rollvalidator()&&passvalidator())
    {
        window.confirm("Please confirm your details."+"\n\n"+details+"\n"+"Press OK to continue...\n");
        window.location="Second_Sem.html";
    }
    else{
        if(!rollvalidator())
        {
            alert("Please enter a valid Roll No.\n");
        }
        else if(!passvalidator())
        {
            alert("Invalid Password !!!\n1.Password must be minimum 6 character\n2.Password must have atleast one Uppercase\n    and a Lowercase letter\n3.Password must have atleast one digit\n");
        }
        return false;
    }
       
}
function valuech(){
    document.getElementById("val").value="on"
}

function rollvalidator(){
    var roll=document.getElementById("inputemail").value;
    var rollformat=/([1-2])([0-9])\d{4}$/;

    if (rollformat.test(roll)&&roll.length==6)
    { 
       return true;
    }
    else
    {
        return false;
    }
}







function passvalidator()
{
    var pasword=document.getElementById("inputpass").value;
    var paswordformat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (paswordformat.test(pasword))
    {
        return true;
    }
    else
    {
        return false;
    }
}
