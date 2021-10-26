function validate()
{
    if (document.getElementById("txt_email").value=="")
    {
        alert("Enter email");
        document.getElementById("txt_email").style.borderColor = "red";
        document.getElementById("txt_email").focus();
    }
    else if(document.getElementById("username").value=="")
    {
        alert("Enter username");
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("username").focus();
    }
    else if(document.getElementById("pwd").value=="")
    {
        alert("Enter password");
        document.getElementById("pwd").style.borderColor = "red";
        document.getElementById("pwd").focus();
    }
}


//autosum
function autocal()
{
    var a=document.getElementsByName("num")
    var s=0;
    for(var i=0;i<a.length;i++)
    {
        if(parseInt(a[i].value))
        {
            s+=parseInt(a[i].value);
        }
    }
    document.getElementById("total").value=s;
}
