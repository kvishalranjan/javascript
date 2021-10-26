function table()
{
    var n=parseInt(document.getElementById("num").value);
    if(isNaN(n))
    {
        alert("Enter only numbers");
        document.getElementById('num').value="";
        document.getElementById('num').focus();
    }
    document.getElementById("result").innerHTML+=n+"<br>";
    for(var i=1;i<=10;i++)
    {
        t=n*i;
        document.getElementById("result").innerHTML+=t+"<br>";
    }
}