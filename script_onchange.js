function radio_change(obj)
{
    var ch=document.getElementsByName("color");
    for(var i=0;i<ch.length;i++)
    {
        ch[i].checked=false;
    }
    obj.checked=true;
}

function color_red()
{
    document.getElementById("text_color").style.color="red";
}
function color_green()
{
    document.getElementById("text_color").style.color="green";
}

function color_blue()
{
    document.getElementById("text_color").style.color="blue";
}

function color_purple()
{
    document.getElementById("text_color").style.color="purple";
}

//changing body background color
function bg_color_red()
{
    document.body.style.backgroundColor="red";
    document.getElementById("text_color").style.color="white";
}
function bg_color_green()
{
    document.body.style.backgroundColor="green";
    document.getElementById("text_color").style.color="white";
}
function bg_color_blue()
{
    document.body.style.backgroundColor="blue";
    document.getElementById("text_color").style.color="white";
}
function bg_color_purple()
{
    document.body.style.backgroundColor="purple";
    document.getElementById("text_color").style.color="white";
}

