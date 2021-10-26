// function calling  inside another function
// return statement 
function total()
{
    var e=parseInt(document.getElementById("eng").value);
    var h=parseInt(document.getElementById("hindi").value);
    var m=parseInt(document.getElementById("math").value);
    t=e+h+m;
    return t;
} 

function percentage()
{
    var t1=total();
    document.getElementById("total").value = t1;
    m=(t1*100)/300;
    return m;
}

function show()
{
    var b = percentage();
    document.getElementById("per").value = b;
}
