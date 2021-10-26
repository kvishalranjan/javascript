function cal(x,y)
{
    var a=x*y;
    document.getElementById("area").value=a;
}

function cal_square(n)
{
   return n*n;
}

function maxno()
{
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c=parseInt(document.getElementById("num3").value);
    var m;
    if(a>b)
    {
        if(a>c)
        m=a;
    }
    else if(b>c)
    {
        m=b;
    }
    else{
        m=c;
    }
    document.getElementById("great").value=m;
    return m;
    
}

function choice()
{
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    // var ch=parseInt(document.getElementById("num3").value);
    var ch=document.getElementById("num3").value;
    var an;
    switch(ch)
    {
        // case 1:
        case '+':
        an=n1+n2;
        document.getElementById("result").innerHTML="Sum";
        document.getElementById("ans").value=an;
        break;

        // case 2:
        case '-':
            an = n1-n2;
            document.getElementById("result").innerHTML="Difference";
            document.getElementById("ans").value=an;
        break;

        default:
            alert("Enter only 1 or 2");
            document.getElementById("num3").value="";
            document.getElementById("num3").focus();
            break;
    }
}