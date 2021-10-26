function click_div()
{
    document.getElementById("para1").innerHTML="Left button pressed";
    document.getElementById("div1").addEventListener("mouseup",div1_chng);
    document.getElementById("div1").addEventListener("click",change_division);
    
}

function click_div1()
{
    document.getElementById("para2").innerHTML="Left button pressed";
    document.getElementById("div2").addEventListener("mouseup",div2_chng);
    document.getElementById("div2").addEventListener("click",change_division);
}

function change_division()
{
    document.getElementById("div1").className="change_div1";
    document.getElementById("div2").className="change_div2";
}

function div1_chng()
{
    document.getElementById("div1").style.width="300px";
    document.getElementById("div1").style.height="300px";
}

function div2_chng()
{
    document.getElementById("div2").style.width="300px";
    document.getElementById("div2").style.height="300px";
}