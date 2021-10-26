function convert()
{
    var x=document.getElementById("txtname").value;
    document.getElementById("txtname").value=x.toUpperCase();
}

function convert_keyup()
{
    var x=document.getElementById("txtname").value;
    document.getElementById("txtname").value=x.toUpperCase();
}

function validate_age(e)
{
    var ch=e.keyCode; //keycode property used to get code when key is pressed
    // alert(ch);
    if(ch>=65 && ch<=90 || ch>=97 && ch<=122)
    {
        alert("Enter only numbers")
        document.getElementById("txtage").focus();
    }
}